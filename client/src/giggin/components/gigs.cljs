(ns giggin.components.gigs
  (:require [giggin.api :as api]
            [giggin.components.gig-editor :refer [gig-editor]]
            [giggin.components.loading :refer [loading]]
            [giggin.helpers :refer [format-price]]
            [giggin.state :as state]
            [reagent.core :as r]))

(defn search-input [search-query search-fn]
  [:div.search-bar
   [:input.form__input
    {:id "search"
     :type "text"
     :placeholder "Enter search query"
     :value @search-query
     :on-change #(reset! search-query (-> % .-target .-value))
     :on-key-down #(when (= (.-keyCode %) 13) (search-fn))}]
   [:button.btn.btn--link.clear-search-btn
    {:on-click #(do (reset! search-query "") (search-fn))}
    [:i.icon.icon--cross]]
   [:button.btn.search-btn
    {:on-click search-fn}
    "Search"]])

(defn gigs
  []
  (let [modal-active? (r/atom false)
        gig-modal-state (r/atom {})
        toggle-modal (fn [active? gig]
                       (reset! modal-active? active?)
                       (reset! gig-modal-state gig))
        save-gig (fn [{:keys [id] :as updated-gig}]
                   (swap! state/gigs update id #(merge % updated-gig))
                   (reset! gig-modal-state {})
                   (reset! modal-active? false))
        close-gig (fn [] (reset! modal-active? false))
        search-query (r/atom "")
        current-page (r/atom 1)
        fetch-gigs (fn [] (api/fetch-gigs @current-page))
        navigate (fn [page] (reset! current-page page) (fetch-gigs))
        search (fn [] 
                 (reset! current-page 1)
                 (api/fetch-gigs @current-page :search @search-query))]
    (fetch-gigs)
    (fn []
      [:main
       (search-input search-query search)
       (if (empty? @state/gigs)
         (loading)
         [:div.gigs
          (for [{:keys [id img title price desc] :as gig} (vals @state/gigs)]
            [:div.gig {:key id}
             [:img.gig__artwork {:src img :alt "alt"}]
             [:div.gig__body
              [:div.gig__title
               [:div.btn.btn-primary.float--right.tooltip
                {:data-tooltip "Add to Order"
                 :on-click #(swap! state/orders update id inc)}
                [:i.icon.icon--plus]]
               title]
              [:p.gig__price (format-price price)]
              [:p.gig__desc desc]]
             [:button.btn.btn--link.edit-gig
              {:on-click #(toggle-modal true gig)}
              "Edit"]])])
       [:div.pagination__container
        [:button.btn.btn__pagination
         {:on-click #(navigate (dec @current-page))
          :disabled (= @current-page 1)}
         "< Previous"]
        [:button.btn.btn__pagination
         {:on-click #(navigate (inc @current-page))
          :disabled (= @current-page @state/total-gig-pages)}
         "Next >"]]
       [:div
        (when @modal-active?
          [gig-editor gig-modal-state save-gig close-gig])]])))
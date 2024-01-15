(ns giggin.components.gig-editor
  (:require [clojure.string :as str]))

(defn gig-input-field [key label modal-state]
  [:div
   [:label.form__label {:for key} (str/capitalize label)]
   [:input.form__input
    {:id key
     :type "text"
     :placeholder (str "Enter " label)
     :value (key @modal-state)
     :on-change #(swap! modal-state assoc key (-> % .-target .-value))}]])

(defn gig-editor
  [modal-state save-gig-fn close-gig-fn]
  [:div.modal__container
   {:class "active"}
   [:div.modal__overlay
    [:div.modal__content
     [:div.modal__header
      [:h2.modal__title "Edit Gig"]]
     [:div.modal__body
      (gig-input-field :title "title" modal-state)
      (gig-input-field :desc "description" modal-state)
      (gig-input-field :price "price" modal-state)]
     [:div.modal__footer
      [:button.btn.btn--secondary
       {:on-click close-gig-fn
        :class "float--right"}
       "Cancel"]
      [:button.btn.btn--primary
       {:on-click #(let [{:keys [id title desc price]} @modal-state]
                     (save-gig-fn {:id id
                                   :title (str/trim title)
                                   :desc (str/trim desc)
                                   :price (js/parseInt price)})
                     (reset! modal-state {}))}
       "Save"]]]]])
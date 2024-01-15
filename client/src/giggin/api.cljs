(ns giggin.api
  (:require [ajax.core :refer [GET]]
            [giggin.state :as state]
            [reagent.core :as r]))

(def api-cache (r/atom {}))

(def api-url "http://localhost:3003/api/")

(defn index-by
  [key coll]
  (->> coll
       (map (juxt key identity))
       (into {})))

(defn merge-gigs [existing-gigs new-gigs]
  (merge-with merge existing-gigs (index-by :id new-gigs)))

(defn gigs-handler [cache-key {:keys [gigs totalPages] :as response}]
  (swap! api-cache assoc-in [:gigs cache-key] response)
  (reset! state/gigs (index-by :id gigs))
  (reset! state/total-gig-pages totalPages))

(defn error-handler [{:keys [status status-text]}]
  (.log js/error (str "An error occurred: " status " " status-text)))

(defn fetch-gigs
  [page & {:keys [search]}]
  (let [cache-key (str page "-" search)]
    (if-let [gigs-from-cache (get-in @api-cache [:gigs cache-key])]
      (gigs-handler cache-key gigs-from-cache)
      (GET (str api-url "gigs")
        {:handler (partial gigs-handler cache-key)
         :params (merge {:page page} (when search {:search search}))
         :error-handler error-handler
         :response-format :json
         :keywords? true}))))
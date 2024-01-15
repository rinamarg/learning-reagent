(ns giggin.state
  (:require [reagent.core :as r]))

(def orders (r/atom {}))

(def gigs (r/atom {}))

(def total-gig-pages (r/atom 0))
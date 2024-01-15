const performSearch = (query, gigs) => {
    const lowerCaseQuery = query.toLowerCase();
    return gigs.filter(gig =>
      gig.title.toLowerCase().includes(lowerCaseQuery) ||
      gig.desc.toLowerCase().includes(lowerCaseQuery)
    );
  };

  export {
    performSearch
  };
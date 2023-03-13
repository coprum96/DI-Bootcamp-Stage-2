const actions = {
    insert: (data) => ({
      type: 'INSERT',
      payload: data,
    }),
    update: (data) => ({
      type: 'UPDATE',
      payload: data,
    }),
    delete: (id) => ({
      type: 'DELETE',
      payload: id,
    }),
    setCurrentIndex: (index) => ({
      type: 'UPDATE-INDEX',
      payload: index,
    }),
  };

  export default actions;
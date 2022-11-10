

  function deleteItem(id) {
    let newArr = data.filter((item) => item.id !== id);
    ;
    setdata(newArr);
    setArray(newArr);
}
function renderProductsGrid(){
  let productsHTML = '';
  for(i=0;i<=105;i++){
    productsHTML += `
    <div class="card">
    <img src="https://picsum.photos/400/300?1" alt="" srcset="">
    <div class="card-body">
      <div class="title">LED bulb 9W</div>
      <div class="price">₹120</div>
    </div>
    <div class="card-footer">
      <button class="btn btn-whatsapp">Add</button>
    </div>
  </div>
    `;
  }
  document.querySelector(".grid").innerHTML =productsHTML;
}

renderProductsGrid();
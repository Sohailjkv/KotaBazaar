function renderProductsGrid(){
  let productsHTML = '';
  for(i=0;i<=105;i++){
    productsHTML += `
    <div class="card">
      <img src="https://picsum.photos/400/300?1" alt="" srcset="">
      <div class="card-body">
        <div class="text">
          <span class="title">LED bulb 9W</span>
          <span class="quantity">1 unit</span>
        </div>
        <div class="price-row">
          <div class="price">
            <span class="unit-price">₹120</span>
            <s class="mrp">₹365</s>
          </div>
          <button class="btn btn-add">Add</button>
        </div>
      </div>
      <div class="card-footer">
        <div class="tier1"><span>Add +5</span> for ₹113/unit</div>
        <div class="tier2"><span>Add +10</span> for ₹108/unit</div>
      </div>
  </div>
    `;
  }
  document.querySelector(".grid").innerHTML += productsHTML;
}

renderProductsGrid();
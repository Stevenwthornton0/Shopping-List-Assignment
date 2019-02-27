$(function() {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const item = $('input').val();
        const results = [];
        result.push($(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`))
        $('.shopping-list').append(results);
    })
})

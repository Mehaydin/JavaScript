

function createMainContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <h1 class="header" mt-5 pt-5 >Welcome User</h1>
      <div class="row">
            
      <div class="row">
      <div class="col-4">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                      the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                      the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
              </div>
          </div>
      </div>
      <div class="col-4">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                      the card's content.</p>
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
              </div>
          </div>
      </div>
  </div>
<!--Content End-->

<!--Content Text-->

<div class="stabil">
<h1>HiCoders 23/24 LMS</h1>

<p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

</div>
    `;
}

export { createMainContent };

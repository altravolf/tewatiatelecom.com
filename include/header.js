// index.html

class indexHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
      <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="assets/img/logo2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="active " href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
        `
  }
}

customElements.define("index-header", indexHeader);


// about.html

class aboutHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
      <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="assets/img/logo2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="" href="index.html">Home</a></li>
          <li><a class="active" href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
        `
  }
}

customElements.define("about-header", aboutHeader);


// services.html

class servicesHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
      <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="assets/img/logo2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a class="active" href="services.html">Services</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
        `
  }
}

customElements.define("services-header", servicesHeader);


// cus-services.html
// This header is for files in service folder
class cusServicesHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="fixed-top d-flex align-items-center ">
  <div class="container d-flex justify-content-between align-items-center">

    <div class="logo">
    <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo -->
      <a href="index.html"><img src="../assets/img/logo2.png" alt="" class="img-fluid"></a>
    </div>

    <nav id="navbar" class="navbar">
      <ul>
        <li><a class="" href="../index.html">Home</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a class="active" href="../services.html">Services</a></li>
        <li><a href="../privacy-policy.html">Privacy Policy</a></li>
        <li><a href="../contact.html">Contact Us</a></li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav><!-- .navbar -->

  </div>
</header>
      `
  }
}

customElements.define("cus-services-header", cusServicesHeader);


// privacy-policy.html

class portfolioHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
      <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="assets/img/logo2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a class="active" href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
        `
  }
}

customElements.define("portfolio-header", portfolioHeader);


// contact.html

class conatctHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
      <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="../assets/img/logo2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a class="active" href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
        `
  }
}

customElements.define("contact-header", conatctHeader);


// cus-header for home directory
class cusHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header" class="fixed-top d-flex align-items-center ">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
      <!-- <h1 class="text-light"><a href="index.html"><span>Tewatia Telecom</span></a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html"><img src="../assets/img/logo2.png" alt="" class="img-fluid"></a>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="" href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header>
    `
  }
}

customElements.define("cus-header", cusHeader);
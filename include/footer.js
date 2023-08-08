class cusFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="index.html">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="about.html">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="Services.html">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="privacy-policy.html">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              Near Jyoti Public School <br>
              Badram Road, Alawalpur<br>
              Palwal - 121102 <br><br>
              <strong>Phone:</strong> +91 83073 23365<br>
              <strong>Email:</strong> ttpower2019@gmail.com<br>
            </p>

          </div>

          <div class="col-lg-4 col-md-6 footer-info">
            <h3>Tewatia Telcom Power Solution PVT. LTD.</h3>
            <p> Tewatia Telecom Power Solution provides solutions for communications, IT, electrical, telecom network, telecom towers, etc. </p>
            <br> 
            <p> <strong> GSTIN: </strong> 06GCVPK9861G1ZR </p>
            
            <div class="social-links mt-3">
              <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
              <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
              <a href="https://wa.link/o659oz" target="_blank" class="whatsapp"><i class="bx bxl-whatsapp"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright 2023 <strong><span>Tewatia Telecom Power Solution</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Powered by <strong style="color: gold;">Altra Volf</strong></a>
      </div>
    </div>
  </footer>
        `
  }
}

customElements.define("cus-footer", cusFooter);
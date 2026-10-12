import Image from "next/image";
export default function BasilissaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `

                    /* Brand tokens */
                    :root{
                    --yellow:#F5D402; --black:#12130F; --blue:#4DB5E2; --white:#fff;
                    --beige:#F6F5F0; --pink:#FC5074; --text:#55564F; --line:#E3E2DC; --olive:#8F7F00;
                    /* Headline font: Homestead Regular is used if installed / self-hosted; Arvo is the web fallback */
                    --head:"Homestead","Homestead Regular","Arvo","Rockwell","Roboto Slab",Georgia,serif;
                    --body:"Poppins",system-ui,-apple-system,"Segoe UI",sans-serif;
                    --gutter:clamp(20px,6.67vw,96px);
                    }
                    *{box-sizing:border-box;margin:0;padding:0}
                    html{scroll-behavior:smooth}
                    body{font-family:var(--body);color:var(--black);background:#fff;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
                    img{display:block;max-width:100%;height:auto}
                    a{color:inherit;text-decoration:none}
                    ul{list-style:none}
                    .wrap{max-width:1440px;margin:0 auto;padding:0 var(--gutter)}
                    section{scroll-margin-top:96px}
                    h1,h2,h3{font-family:var(--head);font-weight:700;text-transform:uppercase;line-height:.98;letter-spacing:-.01em}
                    h2{font-size:clamp(34px,4.1vw,58px)}
                    p{color:var(--text)}
                    .eyebrow{display:flex;align-items:center;gap:12px;font-size:12px;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:var(--black);margin-bottom:22px}
                    .eyebrow::before{content:"";width:24px;height:3px;background:var(--yellow);flex:none}
                    .eyebrow.dark::before{background:var(--black)}
                    .btn{display:inline-block;font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:18px 28px;border:2px solid transparent;transition:.2s;cursor:pointer}
                    .btn-black{background:var(--black);color:#fff}
                    .btn-black:hover{background:#000;transform:translateY(-2px)}
                    .btn-yellow{background:var(--yellow);color:var(--black)}
                    .btn-yellow:hover{filter:brightness(.95);transform:translateY(-2px)}
                    .btn-outline{border-color:var(--black);color:var(--black);text-align:center}
                    .btn-outline:hover{background:var(--black);color:#fff}
                    .textlink{display:inline-block;font-size:13px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;border-bottom:2px solid var(--yellow);padding-bottom:3px}
                    .textlink:hover{border-color:var(--black)}

                    /* Header */
                    header{position:sticky;top:0;z-index:50;background:#fff;border-bottom:1px solid var(--line)}
                    .nav{display:flex;align-items:center;justify-content:space-between;height:96px;gap:24px}
                    .nav .logo img{height:56px;width:auto}
                    .nav ul{display:flex;gap:36px}
                    .nav ul a{font-size:15px;font-weight:500;padding:6px 0;border-bottom:2px solid transparent}
                    .nav ul a:hover,.nav ul a.active{border-color:var(--yellow)}
                    #menu{display:none}
                    .burger{display:none;width:44px;height:44px;cursor:pointer;flex-direction:column;justify-content:center;gap:6px;align-items:center}
                    .burger span{width:24px;height:2px;background:var(--black)}

                    /* Hero */
                    .hero{display:grid;grid-template-columns:minmax(0,560fr) minmax(0,880fr);max-width:1440px;margin:0 auto}
                    .hero-copy{padding:60px 40px 60px var(--gutter);display:flex;flex-direction:column;justify-content:center}
                    .hero h1{font-size:clamp(38px,3.7vw,53px);margin-bottom:28px}
                    .hero p{font-size:18px;max-width:430px;margin-bottom:34px}
                    .hero-img img{width:100%;height:100%;object-fit:cover;min-height:420px}
                    .cta-row{display:flex;gap:12px;flex-wrap:wrap}
                    .strip{height:89px;background:var(--yellow) url(/images/basilissa/strip-pattern.jpg) center/auto 100% repeat-x}

                    /* About */
                    .about{padding:136px 0}
                    .about .wrap{display:grid;grid-template-columns:400px 1fr;gap:130px;align-items:start}
                    .about h2{margin-bottom:44px}
                    .cols{display:grid;grid-template-columns:1fr 1fr;gap:48px;padding-bottom:36px;border-bottom:1px solid var(--line)}
                    .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;padding:36px 0 40px}
                    .stats b{display:block;font-family:var(--head);font-size:32px;line-height:1.1;margin-bottom:10px}
                    .stats span{font-size:13px;color:var(--text);line-height:1.5;display:block}

                    /* Stand for */
                    .stand{background:var(--beige);padding:128px 0 110px}
                    .stand-head{display:flex;justify-content:space-between;align-items:flex-end;gap:32px;margin-bottom:64px}
                    .stand-head img{width:360px}
                    .values{display:grid;grid-template-columns:repeat(5,1fr);gap:24px}
                    .values li{border-top:2px solid var(--black);padding-top:24px}
                    .values small{font-size:13px;font-weight:600;color:var(--olive)}
                    .values h3{font-size:25px;margin:22px 0 22px}
                    .values p{font-size:15px}

                    /* Food */
                    .food{padding:136px 0 140px}
                    .food h2{margin-bottom:60px;max-width:640px}
                    .food-grid{display:grid;grid-template-columns:minmax(0,824fr) minmax(0,377fr);gap:48px}
                    .feature{position:relative}
                    .feature img{width:100%}
                    .feature figcaption{position:absolute;left:0;bottom:0;background:#fff;padding:20px 28px 18px;width:min(394px,100%)}
                    .feature figcaption b{font-family:var(--head);font-size:21px;text-transform:uppercase;display:block;line-height:1.2}
                    .feature figcaption span{font-size:14px;color:var(--text)}
                    .food-side p{margin-bottom:40px}
                    .menu li{border-top:1px solid var(--line);font-family:var(--head);font-weight:700;font-size:18px;text-transform:uppercase;padding:12px 0}
                    .menu li:last-child{border-bottom:1px solid var(--line)}
                    .menu li em{font:500 14px var(--body);text-transform:none;margin-left:6px}
                    .food-side .btn{display:block;margin-top:40px}
                    .food-row{display:grid;grid-template-columns:minmax(0,824fr) minmax(0,401fr);gap:24px;margin-top:57px;align-items:stretch}
                    .food-video{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:contain;background:#111;border:0;border-bottom:12px solid var(--pink);box-shadow:0 18px 38px rgba(18,19,15,.12)}
                    .nomi{min-width:0;display:flex;flex-direction:column}
                    .nomi img{width:100%;height:auto;flex:1;object-fit:cover}
                    .nomi figcaption{background:var(--pink);color:#fff;padding:10px 14px 6px}
                    .nomi figcaption b{font-family:var(--head);text-transform:uppercase;font-size:17px;display:block;line-height:1.3}
                    .nomi figcaption span{font-size:14px}

                    /* Locations */
                    .locations{background:var(--beige);padding:132px 0 126px}
                    .loc-head{display:grid;grid-template-columns:minmax(0,1fr) 400px;gap:48px;align-items:end;margin-bottom:68px}
                    .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
                    .card{position:relative;background:#fff;border:3px solid var(--blue);border-radius:3px;padding:32px 32px 34px;min-height:284px;display:flex;flex-direction:column;overflow:hidden}
                    /* To add the faded branch photo behind a card, set style="--photo:url(images/accra-mall.jpg)" on the .card */
                    .card::before{content:"";position:absolute;inset:0;background:var(--photo,none) center/cover;opacity:.28}
                    .card>*{position:relative}
                    .card-top{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:18px}
                    .card h3{font-size:25px}
                    .card small{font-size:13px;font-weight:600;color:var(--olive)}
                    .card dl{display:grid;grid-template-columns:76px 1fr;row-gap:8px;font-size:14px;font-weight:500}
                    .card dt{font-size:10px;font-weight:700;letter-spacing:.16em;text-transform:uppercase;align-self:center}
                    .card .textlink{margin-top:auto;align-self:flex-start;font-size:12px}

                    /* Corporate */
                    .corp{position:relative;padding:136px 0 136px;background:url(/images/basilissa/corp-bg-pattern.jpg) left 40px/840px auto no-repeat,url(/images/basilissa/corp-bg-bottom.jpg) left bottom/840px auto no-repeat}
                    .corp-grid{display:grid;grid-template-columns:minmax(0,520fr) minmax(0,887fr);max-width:1440px;margin:0 auto;align-items:start}
                    .corp-copy{padding:20px 16px 0 var(--gutter)}
                    .corp h2{font-size:clamp(32px,3.3vw,46px);margin-bottom:40px}
                    .corp-copy>p{margin-bottom:28px;font-size:17px}
                    .services{display:grid;grid-template-columns:1fr 1fr;gap:26px 24px;border-top:1px solid var(--line);padding:26px 0 38px;font-weight:500;font-size:15px}
                    .corp-img img{width:100%}

                    /* People */
                    .people{background:var(--beige);padding:136px 0 128px}
                    .gallery{display:grid;grid-template-columns:minmax(0,824fr) minmax(0,401fr);gap:24px}
                    .gallery div{display:grid;gap:24px}
                    .gallery img{width:100%;height:100%;object-fit:cover}

                    /* Careers */
                    .careers{background:var(--blue)}
                    .careers-grid{display:grid;grid-template-columns:minmax(0,480fr) minmax(0,960fr);max-width:1440px;margin:0 auto}
                    .careers-pattern{background:url(/images/basilissa/careers-pattern.jpg) center top/cover;border-right:1px solid rgba(18,19,15,.25);min-height:520px}
                    .careers-copy{padding:118px var(--gutter) 112px 80px}
                    .careers h2{margin-bottom:44px}
                    .careers-copy>p{color:var(--black);font-size:17px;max-width:620px;margin-bottom:30px}
                    .tracks{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;border-top:1px solid rgba(18,19,15,.3);padding:24px 0 28px;font-weight:500;font-size:15px}

                    /* Basilissa Way */
                    .way{background:var(--yellow);padding:140px 0 120px}
                    .way-head{display:grid;grid-template-columns:minmax(0,1fr) 400px;gap:48px;align-items:end;padding-bottom:86px;border-bottom:2px solid var(--black)}
                    .way h2{font-size:clamp(56px,8.3vw,118px);line-height:.86}
                    .way-head ul{font-family:var(--head);font-weight:700;font-size:26px;line-height:1.35;text-transform:uppercase}
                    .pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:28px;padding-top:40px}
                    .pillars .ico{height:80px;display:flex;align-items:center;margin-bottom:22px}
                    .pillars h3{font:700 12px var(--body);letter-spacing:.2em;margin-bottom:22px}
                    .pillars p{color:var(--black);font-size:15px}

                    /* CTA */
                    .cta .wrap{display:grid;grid-template-columns:1fr minmax(0,522px);gap:48px;align-items:center;padding-top:30px;padding-bottom:24px}
                    .cta h2{font-size:clamp(44px,5.5vw,76px);margin-bottom:44px}
                    .cta p{font-size:18px;margin-bottom:38px}

                    /* Footer */
                    .band{background:#000;display:flex;justify-content:center}
                    .band img{height:121px;width:auto}
                    footer .wrap{display:grid;grid-template-columns:minmax(0,530fr) repeat(3,minmax(0,212fr)) ;gap:24px;padding-top:96px;padding-bottom:44px}
                    footer .logo img{height:66px;width:auto;margin-bottom:10px}
                    footer p{font-size:14px;max-width:300px}
                    footer h4{font-size:11px;font-weight:700;letter-spacing:.24em;text-transform:uppercase;margin-bottom:22px}
                    footer li{font-size:14px;font-weight:500;margin-bottom:16px;line-height:1.25}
                    footer li a:hover{border-bottom:2px solid var(--yellow)}
                    .footbar{height:16px;background:var(--blue)}

                    /* Responsive */
                    @media (max-width:1100px){
                    .nav ul{gap:22px}
                    .about .wrap{grid-template-columns:300px 1fr;gap:56px}
                    .values{grid-template-columns:repeat(3,1fr);row-gap:48px}
                    .cards{grid-template-columns:repeat(2,1fr)}
                    .careers-copy{padding-left:48px}
                    }
                    @media (max-width:900px){
                    .burger{display:flex}
                    .nav{height:72px}
                    .nav .logo img{height:44px}
                    .nav ul{display:none;position:absolute;top:72px;left:0;right:0;background:#fff;flex-direction:column;gap:0;padding:8px var(--gutter) 20px;border-bottom:1px solid var(--line)}
                    .nav ul a{display:block;padding:12px 0}
                    #menu:checked~ul{display:flex}
                    .nav>.btn{padding:12px 16px;margin-left:auto}
                    .hero,.about .wrap,.food-grid,.food-row,.loc-head,.corp-grid,.gallery,.careers-grid,.way-head,.cta .wrap{grid-template-columns:minmax(0,1fr)}
                    .hero-copy{padding:56px var(--gutter)}
                    .about,.stand,.food,.locations,.corp,.people,.way{padding-top:80px;padding-bottom:80px}
                    .about-img{max-width:min(400px,100%)}
                    .stand-head{flex-direction:column;align-items:flex-start}
                    .stand-head img{width:280px}
                    .loc-head,.way-head{gap:28px}
                    .corp-copy{padding:0 var(--gutter) 40px}
                    .careers-pattern{min-height:180px;border-right:0}
                    .careers-copy{padding:72px var(--gutter)}
                    .pillars{grid-template-columns:repeat(2,1fr);row-gap:44px}
                    .cta .wrap{padding-top:72px;padding-bottom:48px}
                    .cta-img{max-width:min(420px,100%);margin:0 auto}
                    footer .wrap{grid-template-columns:1fr 1fr;row-gap:40px;padding-top:64px}
                    }
                    @media (max-width:600px){
                    .cols,.cards,.tracks,.pillars{grid-template-columns:minmax(0,1fr)}
                    .stats,.values{grid-template-columns:1fr 1fr}
                    .strip{height:60px}
                    .food-row{gap:20px;margin-top:36px}
                    .food-video{border-bottom-width:8px;box-shadow:0 12px 24px rgba(18,19,15,.1)}
                    .feature figcaption{width:100%;padding:12px 16px 10px}
                    .feature figcaption b{font-size:17px}
                    .feature figcaption span{font-size:13px}
                    .way-head ul{font-size:20px}
                    .band img{height:80px}
                    }

      ` }} />
      
      
      <header>
        <nav className="nav wrap" aria-label="Main">
          <a className="logo" href="#home" aria-label="Basilissa home"><Image src="/images/basiliss.png" alt="Basilissa" width={160} height={56} priority className="h-14 w-auto" /></a>
          <input type="checkbox" id="menu" aria-label="Toggle menu" />
          <ul>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#food">Our Food</a></li>
            <li><a href="#locations">Our Locations</a></li>
            <li><a href="#corporate">Corporate</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          {/* TODO: replace # with your ordering channel URL */}
          <a className="btn btn-yellow" href="https://basilissa.web.app">Order Now</a>
          <label className="burger" htmlFor="menu" aria-hidden="true"><span></span><span></span><span></span></label>
        </nav>
      </header>
      
      <main>
      <section id="home">
        <div className="hero">
          <div className="hero-copy">
            <div className="eyebrow">A Ghanaian food company · Since 2009</div>
            <h1>Good food.<br />Great<br />experiences.</h1>
            <p>Basilissa is a Ghanaian food brand committed to delivering quality, great taste and memorable experiences to our customers.</p>
            <div className="cta-row">
              <a className="btn btn-black" href="#about">Discover Basilissa</a>
              <a className="btn btn-yellow" href="https://basilissa.web.app">Order Now</a>
            </div>
          </div>
          <div className="hero-img"><Image src="/images/basilissa/hero-customer.jpg" alt="A smiling Basilissa customer pointing at the camera" width={879} height={630} priority className="w-full h-full object-cover" /></div>
        </div>
        <div className="strip" role="img" aria-label="Basilissa brand pattern: La Foi, L'Amour and Adinkra symbols"></div>
      </section>
      
      <section className="about" id="about">
        <div className="wrap">
          <Image className="about-img" src="/images/basilissa/shapergb.jpg" alt="Basilissa dining" width={400} height={600} />
          <div>
            <div className="eyebrow">About Basilissa</div>
            <h2>More than a<br />restaurant.</h2>
            <div className="cols">
              <p>Since 2009, Basilissa has grown from its first restaurant into a network of six branches across Greater Accra — a subsidiary of Nanatrade Limited, built on disciplined excellence, ethical leadership and dependable service.</p>
              <p>Our focus is simple: quality food, served consistently, with genuine care for every customer. Our ambition is larger — to become Africa’s foremost premium food brand and, in time, a global food franchise.</p>
            </div>
            <div className="stats">
              <div><b>2009</b><span>Founded in Ghana</span></div>
              <div><b>6</b><span>Branches in Greater Accra</span></div>
              {/* TODO: replace placeholder with the real headcount */}
              <div><b>[000+]</b><span>People employed</span></div>
              <div><b>Global</b><span>Franchise ambition</span></div>
            </div>
            <a className="textlink" href="#way">Read our story</a>
          </div>
        </div>
      </section>
      
      <section className="stand">
        <div className="wrap">
          <div className="stand-head">
            <div>
              <div className="eyebrow">The Basilissa experience</div>
              <h2>What we stand for.</h2>
            </div>
            <Image src="/images/Layer 2.png" alt="Basilissa experience" width={351} height={57} />
        </div>
          <ul className="values">
            <li><small>01</small><h3>Quality</h3><p>We are committed to quality in every part of the experience.</p></li>
            <li><small>02</small><h3>Taste</h3><p>Great taste is at the heart of what we do.</p></li>
            <li><small>03</small><h3>Consistency</h3><p>The Basilissa standard, wherever customers meet us.</p></li>
            <li><small>04</small><h3>People</h3><p>Our people are central to the experience we create.</p></li>
            <li><small>05</small><h3>Growth</h3><p>Building a food brand with ambitions beyond today’s restaurants.</p></li>
          </ul>
        </div>
      </section>
      
      <section className="food" id="food">
        <div className="wrap">
          <div className="eyebrow">Our food</div>
          <h2>Food made to be remembered.</h2>
          <div className="food-grid">
            <figure className="feature">
              <Image src="/images/basilissa/spicy-chicken.jpg" alt="Basilissa spicy fried chicken in a takeaway box" width={824} height={599} />
              <figcaption><b>Spicy chicken</b><span>Crispy outside, fiery inside, finished with sesame.</span></figcaption>
            </figure>
            <div className="food-side">
              <p>Every Basilissa dish is developed around flavour and prepared to one standard across all our kitchens — from our signature chicken to rice meals, pizza and fresh drinks.</p>
              <ul className="menu">
                <li>Shawarma</li>
                <li>Burgers</li>
                <li>Pizza</li>
                <li>Rice meals</li>
                <li>Chicken</li>
                <li>Sides</li>
                <li>Nominom <em>Drinks and Desserts…</em></li>
              </ul>
              <a className="btn btn-outline" target="_blank" rel="noopener noreferrer" href="https://basilissa.web.app">Explore our food</a>
            </div>
          </div>
          <div className="food-row">
            <video
              width="560"
              height="315"
              autoPlay
              loop
              muted
              className="food-video"
            >
              <source src="/images/vvv.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <figure className="nomi">
              <Image src="/images/basilissa/drinks-desserts.jpg" alt="Nominom juices, cake and pastries" width={401} height={299} />
              <figcaption><b>Drinks &amp; desserts</b><span>Fresh juices and treats from our Nominom range.</span></figcaption>
            </figure>
          </div>         
        </div>
      </section>
      
      <section className="locations" id="locations">
        <div className="wrap">
          <div className="loc-head">
            <div>
              <div className="eyebrow">Our locations</div>
              <h2>Find Basilissa near you.</h2>
            </div>
            <p>
              Six branches across Greater Accra, each run to the same Basilissa standard. Open Monday–Saturday 9:00–23:00 and Sunday 10:00–21:00.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="card-media">
                <Image src="/images/accramall.png" alt="Basilissa Accra Mall branch" width={406} height={286} />
              </div>
              <div className="card-top">
                <h3>Accra Mall</h3>
                <small>01</small>
              </div>
              <dl>
                <dt>Location</dt>
                <dd>Accra Mall, Tetteh Quarshie, Accra</dd>
                <dt>Hours</dt>
                <dd>Mon–Sat 9–23 · Sun 10–21</dd>
                <dt>Contact</dt>
                <dd><a href="tel:+233544577777">054 457 7777</a></dd>
              </dl>
              <a className="textlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Basilissa+Accra+Mall">
                Get directions
              </a>
            </article>

            <article className="card">
              <div className="card-media">
                <Image src="/images/achimota.jpg" alt="Basilissa Achimota Mall branch" width={406} height={286} />
              </div>
              <div className="card-top">
                <h3>Achimota Mall</h3>
                <small>02</small>
              </div>
              <dl>
                <dt>Location</dt>
                <dd>Achimota Mall, Achimota, Accra</dd>
                <dt>Hours</dt>
                <dd>Mon–Sat 9–23 · Sun 10–21</dd>
                <dt>Contact</dt>
                <dd><a href="tel:+233543771778">054 377 1778</a></dd>
              </dl>
              <a className="textlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Basilissa+Achimota+Mall">
                Get directions
              </a>
            </article>

            <article className="card">
              <div className="card-media">
                <Image src="/images/westhills.png" alt="Basilissa West Hills Mall branch" width={406} height={286} />
              </div>
              <div className="card-top">
                <h3>West Hills Mall</h3>
                <small>03</small>
              </div>
              <dl>
                <dt>Location</dt>
                <dd>West Hills Mall, Weija, Accra</dd>
                <dt>Hours</dt>
                <dd>Mon–Sat 9–23 · Sun 10–21</dd>
                <dt>Contact</dt>
                <dd><a href="tel:+233544125506">054 412 5506</a></dd>
              </dl>
              <a className="textlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Basilissa+West+Hills+Mall+Weija">
                Get directions
              </a>
            </article>

            <article className="card">
              <div className="card-media">
                <Image src="/images/tema.png" alt="Basilissa Tema branch" width={406} height={286} />
              </div>
              <div className="card-top">
                <h3>Tema</h3>
                <small>04</small>
              </div>
              <dl>
                <dt>Location</dt>
                <dd>Community 6, Tema</dd>
                <dt>Hours</dt>
                <dd>Mon–Sat 9–23 · Sun 10–21</dd>
                <dt>Contact</dt>
                <dd><a href="tel:+233543771777">054 377 1777</a></dd>
              </dl>
              <a className="textlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Basilissa+Community+6+Tema">
                Get directions
              </a>
            </article>

            <article className="card">
              <div className="card-media">
                <Image src="/images/dawhenya.png" alt="Basilissa Dawhenya branch" width={406} height={286} />
              </div>
              <div className="card-top">
                <h3>Dawhenya</h3>
                <small>05</small>
              </div>
              <dl>
                <dt>Location</dt>
                <dd>Community 25, Dawhenya</dd>
                <dt>Hours</dt>
                <dd>Mon–Sat 9–23 · Sun 10–21</dd>
                <dt>Contact</dt>
                <dd><a href="tel:+233540125497">054 012 5497</a></dd>
              </dl>
              <a className="textlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Basilissa+Dawhenya">
                Get directions
              </a>
            </article>

            <article className="card">
              <div className="card-media">
                <Image src="/images/afienya.jpg" alt="Basilissa Afienya branch" width={406} height={286} />
              </div>
              <div className="card-top">
                <h3>Afienya</h3>
                <small>06</small>
              </div>
              <dl>
                <dt>Location</dt>
                <dd>Afienya</dd>
                <dt>Hours</dt>
                <dd>Mon–Sat 9–23 · Sun 10–21</dd>
                <dt>Contact</dt>
                <dd><a href="tel:+233540102485">054 010 2485</a></dd>
              </dl>
              <a className="textlink" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=Basilissa+Afienya">
                Get directions
              </a>
            </article>
          </div>
        </div>
      </section>
      
      <section className="corp" id="corporate">
        <div className="corp-grid">
          <div className="corp-copy">
            <div className="eyebrow">Corporate &amp; catering</div>
            <h2>Food for business. Food for every occasion.</h2>
            <p>Our kitchens, logistics and in-house delivery team serve companies, institutions and large groups — reliably, on schedule and to one standard.</p>
            <ul className="services">
              <li>Corporate orders</li><li>Events</li>
              <li>Catering</li><li>Office meals</li>
              <li>Large orders</li><li>Partnerships</li>
            </ul>
            <a className="btn btn-black" target="_blank" rel="noopener noreferrer" href="https://nanatrade-erp.odoo.com/contactus">Talk to our team</a>
          </div>
          <div className="corp-img"><Image src="/images/basilissa/corp-chicken.jpg" alt="Glazed sesame chicken on a wooden board, with La Foi and L'Amour brand marks" width={887} height={680} /></div>
        </div>
      </section>
      
      <section className="people">
        <div className="wrap">
          <div className="loc-head">
            <div>
              <div className="eyebrow">Our people</div>
              <h2>The people behind Basilissa.</h2>
            </div>
            <p>Chefs, crew, managers and riders who take pride in doing things properly — every shift, at every branch.</p>
          </div>
          <div className="gallery">
            <Image src="/images/basilissa/kitchen-flatbread.jpg" alt="A Basilissa kitchen team member preparing flatbreads" width={824} height={599} />
            <div>
              <Image src="/images/basilissa/crew-menu.jpg" alt="A Basilissa crew member holding a menu in a restaurant" width={401} height={287} />
              <Image src="/images/basilissa/delivery-rider.jpg" alt="A Basilissa delivery rider on a motorbike" width={401} height={287} />
            </div>
          </div>
        </div>
      </section>
      
      <section className="careers" id="careers">
        <div className="careers-grid">
          <div className="careers-pattern" role="img" aria-label="Basilissa brand pattern"></div>
          <div className="careers-copy">
            <div className="eyebrow dark">Careers</div>
            <h2>Build your future with Basilissa.</h2>
            <p>Join a growing Ghanaian food company that invests in its people. We offer structured training, clear standards and real room to grow — in our kitchens, our restaurants and our head office.</p>
            <ul className="tracks"><li>Kitchen &amp; production</li><li>Restaurant operations</li><li>Head office &amp; support</li></ul>
            <a className="btn btn-black" href="https://nanatrade-erp.odoo.com/jobs" target="_blank" rel="noopener noreferrer">View opportunities</a>
          </div>
        </div>
      </section>
      
      <section className="way" id="way">
        <div className="wrap">
          <div className="way-head">
            <h2>The<br />Basilissa<br />Way</h2>
            <ul><li>Quality.</li><li>Discipline.</li><li>Professionalism.</li><li>Customer centricity.</li><li>Growth.</li></ul>
          </div>
          <div className="pillars">
            <div><div className="ico"><Image src="/images/basilissa/symbol-la-foi.png" alt="La Foi" width={124} height={48} /></div><h3>Faith</h3><p>Trust and confidence as a core value — a disciplined conviction behind every product.</p></div>
            <div><div className="ico"><Image src="/images/basilissa/symbol-nyame-ne-hene.png" alt="Nyame Ne Hene symbol" width={72} height={79} /></div><h3>Nyame Ne Hene · Ethical integrity</h3><p>God is King — fairness, transparency and principled action in all we do.</p></div>
            <div><div className="ico"><Image src="/images/basilissa/symbol-lamour.png" alt="L'Amour" width={136} height={38} /></div><h3>Love</h3><p>Every product and service is made with care, thoughtfulness and dedication.</p></div>
            <div><div className="ico"><Image src="/images/basilissa/symbol-mmere-dane.png" alt="Mmere Dane symbol" width={80} height={79} /></div><h3>Mmere Dane · Customer centricity</h3><p>Time changes — we adapt to our customers’ needs while their well-being stays central.</p></div>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="wrap">
          <div>
            <h2>Come experience Basilissa.</h2>
            <p>Great food. Great taste. Great experiences.</p>
            <div className="cta-row">
              <a className="btn btn-black" href="#locations">Find a location</a>
              <a className="btn btn-yellow" href="https://basilissa.web.app">Order Now</a>
            </div>
          </div>
          <Image className="cta-img" src="/images/basilissa/cta-chicken-rice.jpg" alt="A Basilissa plate of grilled chicken, fried rice, omelette and coleslaw" width={522} height={514} />
        </div>
      </section>
      </main>
      
      <div className="band"><Image src="/images/basilissa/brand-symbols-band.jpg" alt="Basilissa brand symbols" width={500} height={121} /></div>
      <footer id="contact">
        <div className="wrap">
          <div>
            <a className="logo" href="#home"><Image src="/images/basiliss.png" alt="Basilissa" width={160} height={56} className="h-14 w-auto" /></a>
            <p>A Ghanaian food brand and subsidiary of Nanatrade Limited.<br />Since 2009.</p>
          </div>
          <div>
            <h4>Company</h4>
            <ul><li><a href="#about">About Us</a></li><li><a href="#food">Our Food</a></li><li><a href="#locations">Locations</a></li></ul>
          </div>
          <div>
            <h4>Hours</h4>
            <ul><li>Mon–Sat<br />9:00 – 23:00</li><li>Sunday<br />10:00 – 21:00</li></ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+233308249690">030 824 9690</a></li>
              <li><a href="https://wa.me/233308249690" target="_blank" rel="noopener">WhatsApp 030 824 9690</a></li>
              <li><a href="mailto:info@basilissa.com">info@basilissa.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footbar"></div>
      </footer>
      
      
    </>
  );
}

function Css(){
  return(
    <>
    <div className="warp">
      <header>
        <nav style={{border:'1px solid white'}}>
        <a href="#">css 활용</a>
        <a href="#"> img 활용</a>
        <a href="#">router(페이지 이동)</a>
        </nav>
      </header>
      <main>
        <h2>
          css
        </h2>
        * class = jsx문법에서 className <br />
        * jsx 문법에서 스크립트를 적용시키려면 {} 기호를 반드시 이용<br />
        * style=	&#123;스크립트 기호&#125; <br />
        &#123; border:'1px solid white'	&#125;<br />
        * style=	&#123;&#123; border:'1px solid white'	&#125;&#125;
          <hr />
        <h2>
        scss
        </h2>
        *scss install (npm install sass) <br />
        <Css />
      </main>
      </div>
    </>
  );
}

export default Css;
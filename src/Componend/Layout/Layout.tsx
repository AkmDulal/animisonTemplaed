/* eslint-disable @typescript-eslint/no-explicit-any */
import HeaderComponents from "./herader/HeaderComponetd";
import FooterComponents from "./Footer/FooterComponetd";
function Layout({children}: any) {
  return (
    <div className="App">
          <HeaderComponents />
           <main > {children} </main>
           <FooterComponents />
      </div>
  )
}

export default Layout
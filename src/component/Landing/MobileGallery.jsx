import "/component/Landing/Gallery.css";
// const imgUrl = new URL('/Morning Car Club_210.jpg', import.meta.url).href

export default function MobileGallery() {
  const galleryarray = [
    {
      page: "Featured",

      image:
        "https://www.pf-magazin.de/wp-content/uploads/2019/08/Por_996-2_GT3_09.jpg",
      copy: "Cream of the Crop",
      copyurl: "",
    },
    {
      page: "About",
      image:
        "https://cdn.elferspot.com/wp-content/uploads/2022/12/09/Porsche-996-Millennium-1800x1013.jpg",

      copy: "Who We Are",
      copyurl: "/About",
    },
    {
      page: "History",
      image:
        "https://www.classicdriver.com/sites/default/files/users/32113/cars_images/feed_922039/f48ac11fbfdbdd2ce95de88e6ee6025e.jpeg",

      copy: "Evolution Over Revolution",
      copyurl: "/History",
    },
    {
      page: "FAQ",
      image:
        "https://blog.fcpeuro.com/hubfs/porsche-996-buyers-guide-header.jpg",
      copy: "Frequently Asked Questions",
      copyurl: "/FAQ",
    },
  ];

  

  return (
    <div className="gallery">
      {Object.keys(galleryarray).map((key, i) => (
        <div
          className="test2"
          key={i}
          style={{
            backgroundImage: `url("${galleryarray[key].image}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "420px",
          }}
        >
          <div className="gallery-array-title">
            <h2 className="gallery-array-pagename">{galleryarray[key].page}</h2>
            <a href={galleryarray[key].copyurl}>{galleryarray[key].copy}</a>
          </div>
        </div>
      ))}
    </div>
  );
}

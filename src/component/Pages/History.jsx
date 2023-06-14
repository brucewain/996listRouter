import { useEffect, useState } from 'react';
import "/component/Pages/History.css";

export default function History() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const history = [
    {
      title: `At the time of its release in 1997, the fifth generation of the Porsche 911 reset how the iconic sportscar looked. Today, the 996 is highly sought after.
    `,
      text: ` Here is its story The unveiling of the 911 (type 996) in 1997 was a vision of where future Porsche vehicles were heading. Out went the air-cooled engines that had powered all previous iterations, in came a sizeable design overhaul – it’s no surprise that the many were taken aback by the new car’s striking revamp. At the time, it was perhaps the most significant shift in the car looked in the iconic sportscar in its 34-year history. `,
      text2: `These daring changes to the Porsche 911 was a response to pressing challenges facing the company – from reducing production costs to meeting updated safety and emissions regulations. By preserving its classic shape (the new car was 30mm wider than the preceding 993) and combining them with modern technology, Porsche reinvented a sportscar legend. The 996 certainly had a mighty legacy to live up to, but it ultimately represented the first chapter of a new era, sparking a new kind of Porsche passion for fans. Having hit its 25th anniversary in 2022, the 996 is truly having its time in the spotlight. Whether you’re thinking of buying one of your own or are simply a classic 911 fan, we reveal why it’s so sought-after today.`,
      img: "https://assets-v2.porsche.com/stories/-/jssmedia/Project/Content-Hub-Tenants/Content-Hub/content-hub-main/content/25-years-of-996-7-facts/25-years-of-996-7-facts--1.jpg?w=1012&h=auto&rev=e37c0258cb964065867d3461946f8cef",
    },
    {
      title: `The 996 was officially the first water-cooled Porsche `,
      text: `The 996 bid farewell to the air-cooled engines that had powered the four preceding generations of Porsche – the previous 911 (type 993) was the very last of that era. Water-cooled engines have been used by Porsche in every 911 since the type 996. While the flat-six layout was preserved in the 996, air cooling was ditched as it no longer met increasingly strict emissions regulations around the world.
      `,
      text2: `
      The six-cylinder, naturally aspirated engine generated 300PS from a displacement of 3.4-litres, putting it on par with the legendary 911 Turbo 3.3 (type 930). With its athletic proportions and dynamic nature, the output helped address sceptics who doubted that the new, water-cooled 996 wouldn’t meet the standards set by the type 993 when it came to performance.`,
      img: "https://prestigeandperformancecar.com/wp-content/uploads/HDI-13340-900x563.jpg.webp",
    },
    {
      title: `The 996 was the first Porsche to wear a GT3 badge Filling a niche at the top of the model range, the 911 GT3 (type 996) arrived in 1999.
    `,
      text: `This marked the first time that the legendary GT3 letters graced the famed sloping 911 rear. Sporting the same-sized engine, but without the turbocharging, it offered pure driving pleasure both on the road and the track. By transferring tech from the track into a road-going vehicle, it also formed the basis for Porsche Cup race cars and for Porsche customer racing clients the world over. `,
      text2: `The 3.6-litre flat-six of the 996 GT3 delivered a punchy 360PS and 370Nm of torque. A six-speed manual transmission – originally developed for the 993 GT2 – was used, it was equipped with bigger brakes than standard, while its rear wing became known as the ‘taco’ spoiler, significantly reducing drag and providing additional downforce. Rear seats and the spare tyre were left out to reduce weight and offset weight gains elsewhere as a result of additional reinforcement on the brakes, suspension, transmission and body. All this meticulous refinement certainly reaped rewards, with the car clocking a Nürburgring lap time of under eight minutes.`,
      img: "https://cdn.elferspot.com/wp-content/uploads/2020/09/Porsche-911-996-GT3-Clubsport-for-sale-VEHIKEL-29-1.jpg",
    },
    {
      title: `The headlights of the Porsche 996 became an icon Another break with tradition were the new-look headlights that hatched with the Porsche 996.`,
      text: `A break from the round headlights that had become synonymous with the 911, their shape and amber indicators earned them the nickname ‘fried eggs’. Porsche designers Pinky Lai and Grant Larson seamlessly integrated them into the contours of the nose and bumper. There weren’t many manufacturers choosing to merge indicators and headlights in this way at the time, making them all the more distinctive. The design for the light clusters, both front and rear, weren’t made purely for aesthetic reasons – they were also configured to adhere to changing safety regulations. `,
      text2: `The ‘fried eggs’ headlights were revised with the updated version of the 996, and when the sixth-generation 911 (type 997) arrived, it was sporting round headlights once more. Today, most people consider that the distinctive-looking headlights of those first 996 cars are a big factor in the unique character of the car. `,
      img: "https://cdn.elferspot.com/wp-content/uploads/2022/03/2004-PORSCHE-911-CARRERA-40TH-ANNIVERSARY-EDITION-for-sale-19.jpg",
    },
    {
      title: `Porsche at the movies: 996 cameos in Pixar’s Cars `,
      text: `Sally Carrera wasn’t the only Porsche 996 to appear in the Pixar movie Cars – there was also a striking ‘redhead’ by the name of Magen Carrar. Making her mark in Cars 2 during the scenes at the ‘Porto Corsa’ race of the World Grand Prix (a track which bore more than a striking resemblance to Monaco), the animated car got her name from lighting artist Magen Sara Farrar, who worked on the film. `,
      text2: `However, it was Sally Carrera who was the standout vehicle alongside Lightning McQueen in the first Cars film in 2006. She would take took centre stage yet again in 2022 as inspiration for the real-life Sally Special. Selling at auction for a record-breaking $3.6million, this one-off custom Porsche was created by Porsche Exclusive Manufaktur and raised incredible funds for two charities, Girls Inc and USA for UNHCR. `,
      img: "https://hips.hearstapps.com/hmg-prod/images/porsche-sally-special-001-1660271812.jpg?crop=0.433xw:0.325xh;0.353xw,0.377xh&resize=1200:*",
    },
    {
      title: ` The 996 was the biggest 911 yet The 996 was redesigned almost entirely completely.
    `,
      text: `The classic proportions remained, but it was the largest 911 to date. Its design was elegant, classic and clean – 185mm longer, 30mm wider, and with a wheelbase lengthened by 80mm. It was also 50kg lighter than the Porsche 993 which came before. `,
      text2: `This was a more modern and sophisticated driving environment, meaning that the vehicle was well-positioned for the future. In part helped by the more compact, more efficient water-cooled engine, the interior became more spacious. Distinctive touches appeared here too. For example, breaking with 911 tradition, the dashboard gained a distinctive instrument cluster featuring five circular units.`,
      img: "https://drive-my.com/wp-content/uploads/importedmedia/417-scaled.jpg",
    },
    {
      title: `The 40 Years 911 edition: a highlight in the 996 series
    `,
      text: `Introduced at the Frankfurt Auto Show in 2003, the 40 Jahre 911 marked four glorious decades of the Porsche 911. This special edition vehicle was limited to just 1963 units – a nod to the birth year of the 911 – with each bearing ‘40 Jahre’ lettering.`,
      text2: ` The anniversary edition featured a 3.6-litre, naturally aspirated engine with a power output of 345PS. Rear-wheel drive and narrow-bodied, it boasted a wealth of performance enhancements, including the vaunted X51 engine package. Its natural grey leather interior was complemented with the exclusive GT Silver Metallic paintwork on the outside, as used for the Carrera GT. This exterior colour wasn’t available on any other 996. It was a fitting and powerful tribute to a true icon of the sports car world. `,
      img: "https://cdn.elferspot.com/wp-content/uploads/2022/03/2004-PORSCHE-911-CARRERA-40TH-ANNIVERSARY-EDITION-for-sale-21.jpg",
    },
    {
      title: `A used Porsche 996 was transformed into the 911 Classic Club Coupe
    `,
      text: `Informed by details from some of the greatest hits in 911 history, the 2022 Porsche 911 Classic Club Coupe is an extraordinary one-off creation. Over two and a half years, a used 1998 911 Carrera (type 996) was transformed into a unique, one-off vehicle – the result of a collaboration between the Porsche Classic Sonderwunsch programme and Porsche Club of North America. `,
      text2: `Drawing vivid inspiration from the past, as well as the 996 donor vehicle, the ducktail rear wing nods to the 911 Carrera RS 2.7, the double bubble roof is reminiscent of the legendary Carrera GT, and the overall iconic look of the celebrated 911 Sport Classic can be seen from the Sport Grey Metallic paintwork to the interior details. Today, 25 years after its launch, the 996 is in high demand. It’s considered a great way for people to enter the world of classic Porsche sports cars. The story of the Porsche 996 is a fascinating one – and it’s one far from over.`,
      img: "https://assets-v2.porsche.com/stories/-/jssmedia/Project/Content-Hub-Tenants/Content-Hub/content-hub-main/content/25-years-of-996-7-facts/25-years-of-996-7-facts-4.jpg?w=1012&h=auto&rev=cc5a9669b95c44889101f251c1cfdbed",
    },
  ];

  return (
    <div className="History-parent">
      
      {windowWidth < 351 && (
        <img
          src="https://cdn.elferspot.com/wp-content/uploads/2019/03/Porsche-996-4S-for-sale.jpg"
          style={{ width: "100%" }}
          alt=""
        />
      )}

      <div className="History-banner">
        {windowWidth >= 1440 && (
          <div className="History-copy">
            <h3>25 years of 996: 7 facts about the iconic Porsche 911 model</h3>
            <h5>Celebrating 25 years of the first-ever water-cooled Porsche</h5>
          </div>
        )}
      </div>

      <div className="History-child">
        {history.map((item, i) => (
          <div className="History-content" key={i}>
            <span>{item.title}</span>
            <div className="history-child-copy">
              <p>
                {item.text}
                <br />
                <br />
                {item.text2}
              </p>
            </div>

            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

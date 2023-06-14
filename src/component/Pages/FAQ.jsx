import "/component/Pages/FAQ.css";

import {
  ExpansionList,
  ExpansionPanel,
  // ExpansionPanelHeader,
  usePanels,
} from "@react-md/expansion-panel";
import { Typography } from "@react-md/typography";

export default function FAQ() {
  const [panels, onKeyDown] = usePanels({
    count: 8,
    idPrefix: "my-panel-group",
  });

  const [
    panel1Props,
    panel2Props,
    panel3Props,
    panel4Props,
    panel5Props,
    panel6Props,
    panel7Props,
    panel8Props,
  ] = panels;

  const QA = [
    { question: "1", answer: "1" },
    { question: "2", answer: "2" },
    { question: "3", answer: "3" },
  ];

  return (
    <>
      <main>
        <ExpansionList onKeyDown={onKeyDown} className="expansionList">
          <h2 className="FAQ-title">FAQ</h2>
          <div className="faq-parent">
            <ExpansionPanel
              {...panel1Props}
              headerChildren="Panel 1"
              header="How do I reach 996List customer service?"
              expanderIcon={
                <svg
                  width="12"
                  height="18"
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            >
              <p>
                It depends on the service you wish to use. All vehichles are
                shipped on the buyer's dime. Please feel free to reach out to us
                for reccomended partners..
              </p>
            </ExpansionPanel>
            <ExpansionPanel
              {...panel2Props}
              headerChildren={<span>Panel 2</span>}
              header="How long does it take for a car to be shipped to me?"
              expanderIcon={
                <svg
                  width="12"
                  height="18"
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            >
              It depends on the service you wish to use. All vehichles are
              shipped on the buyer's dime. Please feel free to reach out to us
              for reccomended partners.{" "}
            </ExpansionPanel>
            <ExpansionPanel
              {...panel3Props}
              headerChildren="Panel 1"
              header="Does 996List receive a sales commission?"
              expanderIcon={
                <svg
                  width="12"
                  height="18"
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            >
              <Typography>
                996List only takes 4% commission off per sale
              </Typography>
            </ExpansionPanel>
            <ExpansionPanel
              {...panel4Props}
              headerChildren="Panel 1"
              header="How can I sell my car on 996List?"
              expanderIcon={
                <svg
                  width="12"
                  height="18"
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            >
              <Typography>
                Send us an email with your request to contact@99list.com. We
                will provide you with the next best steps.
              </Typography>
            </ExpansionPanel>
            <ExpansionPanel
              {...panel5Props}
              headerChildren={<span>Panel 2</span>}
              header="How many pictures do I need to provide?"
              expanderIcon={
                <svg
                  width="12"
                  height="18"
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            >
              <Typography>
                Basically, the more pictures, the better. We require at least 10
                pictures and one of them must show the Porsche in an overall
                view. To improve your chances of selling, however, you should
                show all perspectives of the outside and inside of your Porsche.
                <br></br>
                <br></br>
                You can also find out how to sell your Porsche as successfully
                as possible in our article “
                <a href="https://www.elferspot.com/en/magazin/5-tips-for-the-successful-porsche-sale/">
                  5 tips for selling a Porsche
                </a>
                "
              </Typography>
            </ExpansionPanel>
            <ExpansionPanel
              {...panel6Props}
              headerChildren="Panel 1"
              header="What payment options are available to me?"
              expanderIcon={
                <svg
                  width="12"
                  height="18"
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke="#1D2026"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              }
            >
              <Typography>
                We reccomend cash or contacting your local credit union/bank for
                financing options
              </Typography>
            </ExpansionPanel>
          </div>
        </ExpansionList>
      </main>
    </>
  );
}

{
  /* <div className="faq-parent">
<h1>FAQ</h1>
{FAQ.map((site, i) => (
  <div className="faq-child" key={i}>
    <div className="faq-dropdown">
      <h2 className="faq-question">{site.question}</h2>
      <button onClick={toggleAnswer} data-key={site.id}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          data-key={site.id}
          // className="open"
          // onClick={toggleAnswer}
        >
          {button}
        </svg>
      </button>
    </div>
    <p
      className="faq-answer"
      data-key={site.id}
      style={{ display: `${answer}` }}
    >
      {site.answer}
    </p>
  </div>
))}
</div> */
}

import "/component/ProductDetailPage/ProductDetailPage.css";


export default function ProductDetailTable({ loadContent }) {


  const filteredKeys = [
    "coverphoto",
    "phonenumber",
    "sellername",
    "location",
    "url",
    "details1",
    "details2",
    "email",
    "phonenumber",
    "chassisCode",
    'listingId',
  ];
  const entries = Object.entries(loadContent).filter(
    ([key]) => !filteredKeys.includes(key)
  );

  return (
    <div className="specifications">
      <table>
        <thead>
          <tr>
            <th>
              <h4>Specifications</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map(([key, entry]) => (
            <tr className="tableKeyEntry" key={key}>
              <td>
                <p className="tableKey">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </p>
              </td>
              <td>
                <p className="tableEntry">{entry}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
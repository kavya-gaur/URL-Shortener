import axios from "axios";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const Linkresult = ({ inputValue }) => {
  console.log(inputValue);
  const [shortenLink, setShortenlink] = useState("Hello World");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenlink(res.data.result.short_link);
      console.log();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  if (loading) {
    return <p className="nodata">Loading...</p>;
  }
  if (error) {
    return <p className="nodata">Something went wrong...</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default Linkresult;

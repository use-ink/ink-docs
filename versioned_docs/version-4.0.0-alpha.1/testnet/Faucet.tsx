import React, {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RECAPTCHA_SITE_KEY = "6LdU5kckAAAAANktvvAKJ0auYUBRP0su94G7WXwe"
const FAUCET_URL = "https://ink-docs-rococo-faucet.parity-testnet.parity.io/drip"

export const Faucet = () => {
  const [captcha, setCaptcha] = useState<string | null>(null)
  const [address, setAddress] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const [inProgress, setInProgress] = useState(false)

  const handleRequest = async () => {
    try {
      setResult("")
      setInProgress(true)
      const body = {
        address,
        parachain_id: "1002",
        recaptcha: captcha
      }

      const fetchResult = await fetch(FAUCET_URL, {
        method: "POST", body: JSON.stringify(body), headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      const result = await fetchResult.json()
      if ('error' in result) {
        setResult(result.error)
      } else {
        setResult(`Hash: ${result.hash}`)
      }
    } catch (e) {
      console.error(e)
      setResult("Request unsuccessful")
    } finally {
      setInProgress(false)
    }
  }

  return (<>
    <ReCAPTCHA
      sitekey={RECAPTCHA_SITE_KEY}
      onChange={setCaptcha}
    />
    <label htmlFor="address-input">Address: </label>
    <input
      id="address-input"
      style={{margin: 5, width: 400}}
      type="text"
      value={address}
      placeholder="Address"
      onChange={(e) => setAddress(e.target.value)}
    />
    <button
      style={{margin: 5, padding: '5px 10px'}}
      disabled={inProgress || !captcha || !address}
      onClick={handleRequest}
    >Request</button>
    <p>{result}</p>
  </>)
}

export default Faucet;

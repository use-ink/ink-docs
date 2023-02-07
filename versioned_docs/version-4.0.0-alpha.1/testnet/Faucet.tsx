import React, {useState} from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export const Faucet = () => {
  const [captcha, setCaptcha] = useState<string | null>(null)
  const [googleAuthToken, setGoogleAuthToken] = useState<string | null>(null)
  const [address, setAddress] = useState<string>("")
  const [result, setResult] = useState<string>("")

  const handleRequest = async () => {
    try {
      setResult("")
      const body = {
        address,
        parachain_id: "1002",
        recaptcha: captcha,
        google_auth_token: googleAuthToken
      }

      const fetchResult = await fetch("http://localhost:5555/drip", {
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
    }
  }

  return (<>
    <GoogleOAuthProvider clientId="505887002580-5tgcbuekhgscc0tbu92c5rtlpdp66o01.apps.googleusercontent.com">
      <ReCAPTCHA
        sitekey="6LdGFkMkAAAAAOaHxPwltZ7BxaFRfyzI-7e9XAW7"
        onChange={setCaptcha}
      />
      {!googleAuthToken && <GoogleLogin onSuccess={({credential}) => setGoogleAuthToken(credential)} onError={() => setGoogleAuthToken(null)} />}
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
      <button disabled={!captcha || !address || !googleAuthToken} onClick={handleRequest}>Request</button>
      <p>{result}</p>
    </GoogleOAuthProvider>
  </>)
}

export default Faucet;

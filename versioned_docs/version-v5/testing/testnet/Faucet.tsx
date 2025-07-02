import React, { useMemo, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const RECAPTCHA_SITE_KEY = '6LcgFI4nAAAAAATrEMoJ6zBacsx5udc1UhGFXemH'
const FAUCET_URL = 'https://rococo-faucet.parity-testnet.parity.io/drip/web'

const Faucet = () => {
  const [captcha, setCaptcha] = useState<string | null>(null)
  const acc = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window?.location?.search);
    return params?.get('acc') || undefined;
  }, [])
  const [address, setAddress] = useState<string | undefined>(acc)
  const [hash, setHash] = useState<string>()
  const [error, setError] = useState<string>()
  const [inProgress, setInProgress] = useState(false)

  const handleRequest = async () => {
    try {
      setHash(undefined)
      setError(undefined)
      setInProgress(true)

      const body = {
        address,
        parachain_id: '1002',
        recaptcha: captcha,
      }

      const fetchResult = await fetch(FAUCET_URL, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const result = await fetchResult.json()
      if ('error' in result) {
        setError(result.error)
      } else {
        setHash(result.hash)
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      setError('Hmm... something went wrong.')
    } finally {
      setInProgress(false)
    }
  }

  return (
    <div className="faucetContainer">
      <h3 className="faucetTitle">Get Testnet Tokens</h3>
      <div className="faucetPlantContainer">
        <img src="/img/plantOne.svg" alt="illustration of a sea grass plant" className="faucetPlantOne" />
        <img src="/img/plantTwo.svg" alt="illustration of a sea plant" className="faucetPlantTwo" />
      </div>
      <div className="faucetHeroContainer">
        <img src="/img/chest.svg" alt="treasure chest" className="faucetHeroImage" />
      </div>
      <form className="withHero">
        <fieldset>
          <label htmlFor="address-input">Your SS58 Address</label>
          <input
            className="addressInput"
            id="address-input"
            type="text"
            value={address}
            placeholder="e.g. 5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR"
            onChange={(e) => {
              setAddress(e.target.value)
              setError(undefined)
              setHash(undefined)
            }}
          />
        </fieldset>
        <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={setCaptcha} />
        <button
          disabled={inProgress || !captcha || !address}
          onClick={async (e) => {
            e.preventDefault()
            await handleRequest()
          }}
        >
          {inProgress ? 'Requesting...' : 'Request'}
        </button>
      </form>

      <div className="faucetResultContainer">
        {hash && (
          <button
            className="faucet-success w-full border-none"
            onClick={() => window.open(`https://rococo.subscan.io/extrinsic/${hash}`, '_blank')}
          >
            <div className="faucet-success-ic">
              <p className="faucet-success-msg">Your funds have been sent!</p>
              <p className="faucet-success-cta">Click here to view the transaction</p>
            </div>
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  )
}

export default Faucet

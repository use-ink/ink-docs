import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const RECAPTCHA_SITE_KEY = '6LdU5kckAAAAANktvvAKJ0auYUBRP0su94G7WXwe'
const FAUCET_URL = 'https://rococo-faucet.parity-testnet.parity.io/drip/web'

const Faucet = () => {
  const [captcha, setCaptcha] = useState<string | null>(null)
  const [address, setAddress] = useState('')
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
      setError('Hmm... algo salió mal.')
    } finally {
      setInProgress(false)
    }
  }

  return (
    <div className="faucetContainer">
      <h3 className="faucetTitle">Obten Tokens para la Testnet</h3>
      <div className="faucetPlantContainer">
        <img src="/img/plantOne.svg" alt="illustración de una alga marina" className="faucetPlantOne" />
        <img src="/img/plantTwo.svg" alt="illustración de una planta marina" className="faucetPlantTwo" />
      </div>
      <div className="faucetHeroContainer">
        <img src="/img/chest.svg" alt="imagen de un cofre del tesoro" className="faucetHeroImage" />
      </div>
      <form className="withHero">
        <fieldset>
          <label htmlFor="address-input">Tu dirección SS58</label>
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
          {inProgress ? 'Solicitando...' : 'Solicitado'}
        </button>
      </form>

      <div className="faucetResultContainer">
        {hash && (
          <button
            className="faucet-success w-full border-none"
            onClick={() => window.open(`https://rococo.subscan.io/extrinsic/${hash}`, '_blank')}
          >
            <div className="faucet-success-ic">
              <p className="faucet-success-msg">Sus fondos han sido enviados!</p>
              <p className="faucet-success-cta">Haga clic aquí para ver la transacción.</p>
            </div>
          </button>
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  )
}

export default Faucet

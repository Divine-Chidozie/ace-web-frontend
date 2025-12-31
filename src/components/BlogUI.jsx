import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./BlogUI.module.css";

/**
 * Displays a modal that contains a form to sign up for newsletters.
 * @param {*} setShowSubscribeModalState state setter of the containing blog that will be used to close the modal that this component renders to.
 * @returns 
 */
export function NewsletterSubscribe({setShowSubscribeModalState}) {
    const [showNameInput, setShowNameInput] = useState(false);
    const [subscriptionResult, setSubscriptionResult] = useState({status: "", message: ""});
    const [payload, setPayload] = useState({emailValue: "", nameValue: ""});
    return (
      <div className="app-modal">
        <div className={styles["newsletter-modal-main"]}>
          <button type="reset" className="close-modal" onClick={() => setShowSubscribeModalState(false)}>X</button>
          <p>Subscribe to our newsletters</p>
          <h5>Stories, tips and expertise about business growth today</h5>
          {subscriptionResult.status.length ? 
            (
              <div className={styles["subscription-success"]}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4>{ subscriptionResult.message }</h4>
                  <p>
                    {
                      subscriptionResult.status === "Success" ? 
                      "Thank you for subscribing to our newsletter. We're excited to have you on board!" : 
                      () => {
                        setTimeout(() => {
                          setSubscriptionResult({status: "", message: ""});
                        }, 5000);
                        return "Sorry, there was an issue with your subscription. Please try again later.";
                      }
                    }
                  </p>
                </motion.div>
              </div>
            ) : 
            (<form onSubmit={async (e) => {
              e.preventDefault();
              const response = await fetch("/blog/newsletter/subscribe", {
                method: "POST", 
                body: JSON.stringify({email: payload.emailValue, name: payload.nameValue}),
                headers: {"Content-Type": "application/json"}
              });
              let data = await response.json();
              setSubscriptionResult(data);
            }}>
              {showNameInput ? (
                <>
                  <div style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                      <button type="button" onClick={() => {setShowNameInput(false)}} style={{background: "none"}}>
                          <ion-icon className="icon" name="arrow-back-outline"></ion-icon>
                      </button>
                      <input type="text" placeholder="Enter your name" name="name" onChange={e => setPayload({...payload, nameValue: e.target.value})} />
                  </div>
                  <input type="submit" value="Subscribe" />
                </>
                ) : (
                  <>
                    <input type="email" placeholder="Enter your email address" name="email" onChange={e => setPayload({...payload, emailValue: e.target.value})} required />
                    <button type="button" onClick={(e) => {
                      setShowNameInput(true);
                    }}>Next</button>
                  </>
                )}
            </form>)
          }
        </div>
      </div>
    );
}

/**
 * This Component displays a "subscribe to newsletter " message
 * @param {Function} showSubModalHandler a function (state setter) to encapsulates what should happen when subscribe button is clicked. 
 * The same state setter can be passed into NewsletterSubscribe with a to undo or close whatever was done here.
 * @returns 
 */
export function SubcribeBox({showSubModalHandler}) {
    return (
      <div className={styles["subscribe-banner"]}>
        <p>Subscribe to our newsletters</p>
        <h4>Get stories like this in your inbox</h4>
        <button type="button" onClick={showSubModalHandler}>Subscribe</button>
      </div>
    )
}
 
/**
 * You can use this without props for the Call To Action. If you want different set of contents,
 * you can add children (as in 
 * <CTA>
 *    <h2>New Content</h2>
 * </CTA>
 * )
 * @param {*} children descendants you want this component to have
 * @returns  a component
 */
export function CTA({children}) {
  return (
    <section className={styles["cta-container"]}>
      {
        children ? children : 
        <>
          <h3>Ready to Boost Your Social Media Presence?</h3>
          <p>Choose one of our packages.</p>
          <p>You can count on us</p>
          <a className="light-link" href="/services">Contact Ace Digital Co Today!</a>
        </>
      }
    </section>
  );
}

/**
 * Use this to display related articles
 * @param {*} an array that stores metadata about each individual related post.
 */
export function RelatedArticles({articles}) {
  return <>{
    articles.map(article => 
      <div className={styles["related-post"]}>
        <div>Image</div>
        <div>
          <span>RELATED ARTICLE</span>
          <h4>{article.title}</h4>
          <p>By <span>{article.author}</span> in {article.postCategory}</p>
        </div>
      </div>
    )
  }
  </>
}
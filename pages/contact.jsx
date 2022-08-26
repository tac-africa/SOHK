/* eslint-disable react/jsx-key */
// import './mcFormStyles.scss'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Contact from '../components/contactForm'

const MailChimpFormContainer = props => {

  const postURL = `https://gmail.us13.list-manage.com/subscribe/post?u=${process.env.NEXT_PUBLIC_MAILCHIMP_U}&id=${process.env.NEXT_PUBLIC_MAILCHIMP_ID}`

  return(
    <div className='mc__form-container'>
      <MailchimpSubscribe 
        url={postURL}
        render={({subscribe, status, message}) => (
          <Contact
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}     
          />
        )}
      />

    </div>
  )
}

export default MailChimpFormContainer
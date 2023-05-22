import React from 'react'
import featureimage from '../images/Frame 19.png'

function Features() {
  return (
    <div id='features'>
        <div className='features-model'>
            <img src={featureimage} alt='feature' />
        </div>
        <div className='features-text'>
            <h2>Feautures</h2>
            <h3> This Application <span>Software</span> is Art</h3>
            <p>Windows 10 Enterprise is a powerful operating system designed for businesses and organizations. It provides advanced security features, robust management tools, and enhanced productivity capabilities. With Windows 10 Enterprise, businesses can benefit from comprehensive protection against modern security threats, such as malware and unauthorized access, ensuring the safety of sensitive data and networks. It also offers flexible deployment options and centralized management, making it easier for IT administrators to configure and maintain a large number of devices. Windows 10 Enterprise empowers businesses to boost productivity with features like virtual desktops, multitasking enhancements, and seamless integration with cloud services. Overall, it is a reliable and feature-rich solution that helps businesses optimize their operations and stay secure in today's digital landscape
            </p><button>View more Features</button>
        </div>
    </div>
  )
}

export default Features
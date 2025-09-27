import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, Clock } from 'lucide-react';
import styles from './WhatsAppWidget.module.css';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp configuration - replace with your actual WhatsApp number
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
  const defaultMessage = 'Hello! I would like to know more about your services.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${whatsappNumber}`, '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@techflow.com', '_self');
  };

  const contactOptions = [
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      icon: MessageCircle,
      action: handleWhatsAppClick,
      color: '#25D366'
    },
    {
      id: 'phone',
      title: 'Call Us',
      description: '+1 (234) 567-8900',
      icon: Phone,
      action: handlePhoneClick,
      color: '#3b82f6'
    },
    {
      id: 'email',
      title: 'Email Us',
      description: 'info@techflow.com',
      icon: Mail,
      action: handleEmailClick,
      color: '#8b5cf6'
    }
  ];

  return (
    <>
      {/* WhatsApp Toggle Button */}
      {!isOpen && (
        <button
          className={styles.whatsappToggle}
          onClick={() => setIsOpen(true)}
          aria-label="Open WhatsApp contact options"
        >
          <MessageCircle className={styles.whatsappIcon} />
          <span className={styles.whatsappBadge}>💬</span>
        </button>
      )}

      {/* WhatsApp Widget */}
      {isOpen && (
        <div className={styles.whatsappWidget}>
          {/* Widget Header */}
          <div className={styles.widgetHeader}>
            <div className={styles.headerInfo}>
              <div className={styles.whatsappLogo}>
                <MessageCircle className={styles.logoIcon} />
              </div>
              <div>
                <h3 className={styles.widgetTitle}>Contact Us</h3>
                <span className={styles.widgetSubtitle}>We're here to help!</span>
              </div>
            </div>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
              aria-label="Close contact widget"
            >
              <X className={styles.closeIcon} />
            </button>
          </div>

          {/* Business Hours */}
          <div className={styles.businessHours}>
            <Clock className={styles.clockIcon} />
            <div>
              <span className={styles.hoursTitle}>Business Hours</span>
              <span className={styles.hoursText}>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>

          {/* Contact Options */}
          <div className={styles.contactOptions}>
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  className={styles.contactOption}
                  onClick={option.action}
                  style={{ '--option-color': option.color }}
                >
                  <div className={styles.optionIcon}>
                    <Icon className={styles.optionIconSvg} />
                  </div>
                  <div className={styles.optionContent}>
                    <span className={styles.optionTitle}>{option.title}</span>
                    <span className={styles.optionDescription}>{option.description}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Quick Message */}
          <div className={styles.quickMessage}>
            <p className={styles.quickMessageText}>
              Need immediate assistance? Click WhatsApp to start a conversation!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;

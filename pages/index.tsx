export default function Home() {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      lineHeight: '1.7',
      backgroundColor: '#fafafa',
      color: '#333',
    },
    header: {
      fontSize: '2.5rem',
      marginBottom: '30px',
      textAlign: 'center',
      color: '#2c3e50',
    },
    section: {
      marginBottom: '40px',
    },
    title: {
      fontSize: '1.5rem',
      color: '#1a73e8',
      marginTop: '20px',
    },
    ul: {
      paddingLeft: '20px',
      marginTop: '10px',
    },
    li: {
      marginBottom: '8px',
    },
    p: {
      margin: '10px 0',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Terms and Conditions</h1>

      <div style={styles.section}>
        <h2 style={styles.title}>1. Acceptance of Terms</h2>
        <p style={styles.p}>
          By creating an account, accessing, or using LocalVibe, you agree to abide by these Terms,
          our Privacy Policy, and any additional guidelines or future modifications.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>2. Use of the Service</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Eligibility: You must be at least 13 years old to use LocalVibe.</li>
          <li style={styles.li}>License: LocalVibe grants you a limited, non-transferable, and non-exclusive license to use the app for personal, non-commercial use.</li>
          <li style={styles.li}>Account Security: You are responsible for maintaining the confidentiality of your login credentials and are liable for any activity on your account.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>3. User Conduct</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Community Guidelines: Respect others and engage positively. Harassment and inappropriate content are prohibited.</li>
          <li style={styles.li}>
            Prohibited Activities:
            <ul style={styles.ul}>
              <li style={styles.li}>Posting false, harmful, or offensive content</li>
              <li style={styles.li}>Engaging in phishing, spam, or malware distribution</li>
              <li style={styles.li}>Impersonating others or using fake identities</li>
              <li style={styles.li}>Tampering with LocalVibe's security features</li>
            </ul>
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>4. Data Collection and Privacy</h2>
        <p style={styles.p}>
          LocalVibe collects personal data to improve services. This includes:
        </p>
        <ul style={styles.ul}>
          <li style={styles.li}>Your name, email, and profile information</li>
          <li style={styles.li}>Your location (for maps and nearby content)</li>
          <li style={styles.li}>Posts and media shared in the feed</li>
          <li style={styles.li}>Business locations pinned on the map</li>
        </ul>
        <p style={styles.p}>
          We use this data to personalize your experience and connect you with nearby businesses and content.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>5. Content and Intellectual Property</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>User Content: You own your content but grant LocalVibe a license to use it on the platform.</li>
          <li style={styles.li}>Platform Assets: Logos, trademarks, and branding are owned by LocalVibe.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>6. Account Suspension and Termination</h2>
        <p style={styles.p}>
          We reserve the right to suspend or delete accounts for repeated or serious violations of these Terms.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>7. Limitation of Liability</h2>
        <p style={styles.p}>
          LocalVibe is provided "as-is" with no guarantees. We are not responsible for damages or data loss.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>8. Changes to Terms</h2>
        <p style={styles.p}>
          These Terms may be updated at any time. Continued use of LocalVibe means you accept any new changes.
        </p>
      </div>
    </div>
  );
}

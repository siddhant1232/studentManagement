import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.title}>Fine Track</h4>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Product</h4>
          <ul style={styles.list}>
            <li style={styles.item}><a href="/automated-data-aggregation" style={styles.link} target="_blank" rel="noopener noreferrer">Automated Data Aggregation</a></li>
            <li style={styles.item}><a href="/predictive-analytics" style={styles.link} target="_blank" rel="noopener noreferrer">Predictive Analytics</a></li>
            <li style={styles.item}><a href="/natural-language-reporting" style={styles.link} target="_blank" rel="noopener noreferrer">Natural Language Reporting</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Company</h4>
          <ul style={styles.list}>
            <li style={styles.item}><Link to="/about" style={styles.link}>About</Link></li> {/* Updated with Link */}
            <li style={styles.item}><a href="/features" style={styles.link} target="_blank" rel="noopener noreferrer">Features</a></li>
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Resources</h4>
          <ul style={styles.list}>
            <li style={styles.item}><a href="/blog" style={styles.link} target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li style={styles.item}><a href="/application" style={styles.link} target="_blank" rel="noopener noreferrer">Application</a></li>
            
          </ul>
        </div>
        <div style={styles.column}>
          <h4 style={styles.title}>Reach us</h4>
          <ul style={styles.list}>
            <li style={styles.item}><a href="mailto:sales@FineTrack.com" style={styles.link}>sales@FineTrack.com</a></li>
            <li style={styles.item}><a href="mailto:support@FineTrack.com" style={styles.link}>support@FineTrack.com</a></li>
            <li style={styles.item}><a href="mailto:careers@FineTrack.com" style={styles.link}>careers@FineTrack.com</a></li>
            <li style={styles.item}>
              <a href="https://twitter.com" style={styles.link} target="_blank" rel="noopener noreferrer">Twitter</a>{' '}
              <a href="https://linkedin.com" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>{' '}
              <a href="https://facebook.com" style={styles.link} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.text}>©️ Fine Track 2024</p>
        <div>
          <a href="/privacy-policy" style={styles.link} target="_blank" rel="noopener noreferrer">Privacy Policy</a> |{' '}
          <a href="/terms-conditions" style={styles.link} target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '20px 0',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    minWidth: '200px',
    margin: '10px',
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  item: {
    marginBottom: '5px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px',
  },
  text: {
    marginBottom: '5px',
  },
};

export default Footer;

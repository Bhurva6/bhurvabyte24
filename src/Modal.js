import React from 'react';
import './Modal.css';

function Modal({ show, onClose, onPrev, onNext, title, description, subtitle1, bulletPoints1, subtitle2, bulletPoints2 }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">✕</span>
        </button>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className={`modal-content ${subtitle2 ? 'two-columns' : 'single-column'}`}>
          <div className="modal-column">
            <h3>{subtitle1}</h3>
            <ul>
              {bulletPoints1.map((point, index) => (
                <li key={index}>
                  {point === 'Resolved 8 tickets' ? (
                    <a href="https://bajajfinance-my.sharepoint.com/:x:/r/personal/bhurva_sharma_bajajfinserv_in/_layouts/15/Doc.aspx?sourcedoc=%7B07AFB2C4-09C6-4C45-927C-288AD6D6ACA9%7D&file=CWV_Tickets.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1&login_hint=bhurva.sharma%40bajajfinserv.in&ct=1716794566893&wdOrigin=OFFICECOM-WEB.MAIN.EDGEWORTH&cid=3aabd4f7-da60-451b-90b0-dde7c8b4c2dd&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=b07e2fa8-2eef-45ef-b4a1-975f0fc89c28" target="_blank" rel="noopener noreferrer">
                      Resolved 8 tickets 🔗
                    </a>
                  ) : (
                    point
                  )}
                </li>
              ))}
            </ul>
          </div>
          {subtitle2 && (
            <div className="modal-column">
              <h3>{subtitle2}</h3>
              <ul>
                {bulletPoints2.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;

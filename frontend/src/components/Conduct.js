import React from 'react';
import '../style/conduct.css';

const Conduct = () => {
  return (
    <div className="conduct-container">
      <h1 className="conduct-title">Code of Conduct</h1>
      <p>
        We strive to create a welcoming and inclusive community for all members. We value respect,
        collaboration, and a positive learning environment. This code of conduct outlines our
        expectations for behavior within our community spaces, both online and offline. By
        participating in our community, you agree to abide by this code of conduct.
      </p>

      <h2 className="conduct-section-title">Expected Behavior</h2>
      <ul className="conduct-list">
        <li>Be respectful and considerate towards others, regardless of their background, experience level, or opinions.</li>
        <li>Foster an inclusive and welcoming environment where everyone feels comfortable and safe to participate.</li>
        <li>Engage in constructive and supportive discussions, offering feedback and advice in a helpful manner.</li>
        <li>Respect the privacy and confidentiality of fellow community members.</li>
        <li>Collaborate and share knowledge to promote learning and growth within the community.</li>
        <li><strong>Be kind, helpful, and considerate.</strong></li>
      </ul>

      <h2 className="conduct-section-title">Unacceptable Behavior</h2>
      <ul className="conduct-list">
        <li>Harassment, discrimination, or any form of offensive or disrespectful language or behavior.</li>
        <li>Personal attacks, insults, or derogatory comments directed at other community members.</li>
        <li>Trolling, spamming, or any other disruptive behavior that interferes with the positive community experience.</li>
        <li>Sharing or distributing inappropriate, offensive, or harmful content.</li>
        <li>Any behavior that violates applicable laws or regulations.</li>
        <li>Religious or political controversial discussions.</li>
      </ul>

      <h2 className="conduct-section-title">Reporting Incident</h2>
      <p>
        If you witness or experience any behavior that violates our code of conduct, please report it
        to the community moderators or administrators immediately.
      </p>
      <p>You can reach out:</p>
      <ul className="conduct-list">
        <li><a href="mailto:open8hub@gmail.com">Community Email</a></li>
        <li>In-person communication with a designated community organizer.</li>
      </ul>
      <p>
        We take all reports seriously and will promptly investigate any reported incidents. Your
        identity will be kept confidential, and we will take appropriate actions to address the
        situation.
      </p>

      <h2 className="conduct-section-title">Consequences of Code of Conduct Violations</h2>
      <p>Violations of our code of conduct will not be tolerated. Consequences for code of conduct violations may include:</p>
      <ul className="conduct-list">
        <li>Private or public warning by community moderators or administrators.</li>
        <li>Temporary or permanent suspension of community privileges or access.</li>
        <li>Removal or exclusion from community events, activities, or online platforms.</li>
        <li>
          Community members who repeatedly violate the code of conduct or engage in severe misconduct
          may face more severe consequences, including permanent expulsion from the community.
        </li>
      </ul>

      <p>
        <strong>
          Remember, we are here to support and learn from each other. Let's work together to create a
          positive and inclusive environment where everyone can thrive.
        </strong>
      </p>

      <blockquote>
        <p><em>This code of conduct applies to all members of the community.</em></p>
      </blockquote>
    </div>
  );
};

export default Conduct;

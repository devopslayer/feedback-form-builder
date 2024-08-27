import React from "react";
import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../utils/localStorageUtils";

const FeedbackDetail = () => {
  const { id } = useParams();
  const form = getFromLocalStorage("feedbackForms")[id];
  const submissions = getFromLocalStorage(`feedback-${id}`) || [];

  if (!form) {
    return <div>Form not found.</div>;
  }

  return (
    <div>
      <h2>{form.title}</h2>
      <div>
        <h3>Submissions</h3>
        {submissions.length > 0 ? (
          submissions.map((submission, index) => (
            <div key={index}>
              <p>{JSON.stringify(submission)}</p>
            </div>
          ))
        ) : (
          <p>No submissions available.</p>
        )}
      </div>
    </div>
  );
};

export default FeedbackDetail;

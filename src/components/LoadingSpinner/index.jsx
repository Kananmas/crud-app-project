import { IonSpinner } from "@ionic/react";

export function LoadingSpinner() {
  return (
    <div className="spinner">
      <IonSpinner name="circular" color="orange"></IonSpinner>
    </div>
  );
}

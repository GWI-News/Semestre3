import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const db = getFirestore();

const logUserActivity = async (userId, activity) => {
  try {
    const userActivitiesRef = collection(db, 'userActivities', userId, 'activities');
    await addDoc(userActivitiesRef, {
      activity,
      timestamp: serverTimestamp(),
    });
    console.log('Atividade registrada com sucesso.');
  } catch (error) {
    console.error('Erro ao registrar atividade:', error);
  }
}

export default logUserActivity;
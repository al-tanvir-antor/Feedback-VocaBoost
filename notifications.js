// VocaBoost Notification System
// 100 Daily Custom Vocabulary Notifications

const notificationConfig = {
  // Notification schedule (times throughout the day)
  schedule: [
    { hour: 6, minute: 0 },   // 6:00 AM
    { hour: 7, minute: 30 },  // 7:30 AM
    { hour: 9, minute: 0 },   // 9:00 AM
    { hour: 10, minute: 30 }, // 10:30 AM
    { hour: 12, minute: 0 },  // 12:00 PM
    { hour: 13, minute: 30 }, // 1:30 PM
    { hour: 15, minute: 0 },  // 3:00 PM
    { hour: 16, minute: 30 }, // 4:30 PM
    { hour: 18, minute: 0 },  // 6:00 PM
    { hour: 19, minute: 30 }, // 7:30 PM
    { hour: 21, minute: 0 }   // 9:00 PM
  ],

  // Motivational messages (alternates with vocabulary)
  motivationalMessages: [
    { title: "🌟 Daily Reminder", body: "পড়তে না বইলে তোমার ময়না পাখি তো ফুরুত হইয়া যাইবো ডার্লিং! হা হা হা, এটাই বাস্তব, কিন্তু আই লাভ ইউ বলার কেউরে পাইবা না - বাণীতে: রিপন ভিডিও (ব্যান্ড ৯.৫)" },
    { title: "💪 Keep Going", body: "চাচা, হেনা কোথায়? সে কি আমার আগেই ইংলিশ শিখে ফেলবে চাচা? - বাপ্পা ফ্রম ফিডব্যাক" },
    { title: "🎯 Stay Focused", body: "Your dedication to learning will pay off!" },
    { title: "📚 Study Time", body: "লক্ষ্য ছোট থাকাটাও কিন্তু এক ধরনের অপরাধ - এ.পি.জে আব্দুল কালাম" },
    { title: "✨ You're Doing Great", body: "আহো ভাতিজা আহো, সানডে মানডে কুলুজ কইরা পড়তে বহো - ডিপজল" },
    { title: "🔥 Streak Alert", body: "তোর কি এমনে ঘুমাইয়া ঝিমাইয়া আর মোবাইল টিপাইয়াই জীবন যাইবো রে মকছুদ? - তানভীর স্যার" },
    { title: "🎓 Knowledge Building", body: "শিক্ষক শুধু জ্ঞানের দরজা উন্মুক্ত করে দেন, সেটাতে প্রবেশ কিন্তু আপনাকেই করতে হবে - চীনা প্রবাদ" },
    { title: "💡 Quick Practice", body: "অনেক কিছু ফিরে আসে, ফিরিয়ে আনা যায়, কিন্তু সময়কে ফিরিয়ে আনা যায় না - আবুল ফজল" },
    { title: "🌈 Progress Update", body: "পাশের বাড়ির সখিনার আম্মুকে শাশুড়ি বানাতে চাও? এখনই প্র্যাক্টিসে লেগে যাও" },
    { title: "🚀 IELTS Success", body: "তাদেরকে এড়িয়ে চলো, যারা তুমি কোথায় আছো সেটা আগে না বুঝিয়ে দিয়েই তোমাকে কোথায় যেতে হবে সেটা শেখাতে চায়" },
    { title: "📖 Daily Word Challenge", body: "সফলতা আসে অভিজ্ঞতা থেকে, আর অভিজ্ঞতা আসে ভুল থেকে। চলো প্র্যাক্টিস করি এবং ভুলগুলো ঠিক করি। যার কেউ নাই তার ফিডব্যাক আছে..." },
    { title: "⭐ Vocabulary Boost", body: "তোমার লাইফে শুধু একটা So Beautiful, so Elegant আইএলটিএস স্কোর দরকার, ভিসা লাগলে তখন এলাকার চান্দুও বলবে Looking like a Wow! - ফিডব্যাক এডুকেশন" },
    { title: "🎯 Goal Reminder", body: "কি রে আবুল, তুই বেটা মন দিয়া পড়বি, স্কোর করবি, বিদেশ যাবি, তুই কেন টো টো কইরা ঘুরোস আর মোবাইল স্ক্রল করস? ভবিষ্যতে কি ভিক্ষা করার ইচ্ছা আছে?" },
    { title: "💫 Learning Moment", body: "নাড়িং ভিড়িং বাদ দেও, বিদেশ যাও, আইএলস দেও..." },
    { title: "🌟 Excellence Awaits", body: "বেহুদা টেনশন কইরা যতক্ষণ সময় নষ্ট করছ, অতক্ষণ বইসা অ্যাপটা ওপেন কইরা কয়টা ভোকাবুলারিও তো শিখা যায়, তাই না?" }
  ],

  // Practice prompts
  practicePrompts: [
    { title: "🎴 Flashcard Time", body: "Review 5 flashcards to reinforce your learning!" },
    { title: "🧠 Quiz Challenge", body: "Test yourself with a quick quiz session!" },
    { title: "📝 Writing Practice", body: "Use your new words in sentences today!" },
    { title: "🗣️ Speaking Drill", body: "Practice pronouncing your vocabulary words!" },
    { title: "🎯 Targeted Review", body: "Focus on your mistake words for improvement!" },
    { title: "📊 Progress Check", body: "Review your statistics and set new goals!" },
    { title: "⭐ Favorites Review", body: "Go through your favorite words collection!" },
    { title: "🔄 Mixed Practice", body: "Combine flashcards and quizzes for best results!" },
    { title: "📚 Topic Focus", body: "Master words from one topic category today!" },
    { title: "💪 Difficulty Challenge", body: "Challenge yourself with advanced vocabulary!" }
  ],

  // IELTS tips
  ieltsTooltips: [
    { title: "💡 IELTS Tip", body: "Use a variety of vocabulary to improve your band score!" },
    { title: "📝 Writing Tip", body: "Paraphrasing is crucial in IELTS Writing Task 2!" },
    { title: "🗣️ Speaking Tip", body: "Use less common vocabulary naturally in your responses." },
    { title: "👂 Listening Tip", body: "Expand vocabulary to understand diverse accents better!" },
    { title: "📖 Reading Tip", body: "Strong vocabulary speeds up your reading comprehension!" },
    { title: "✍️ Task 2 Tip", body: "Academic vocabulary enhances your essay quality!" },
    { title: "🎯 Band 7+ Tip", body: "Collocations and idiomatic expressions show language mastery!" },
    { title: "📊 Task 1 Tip", body: "Learn specific vocabulary for describing trends and data!" },
    { title: "🌟 Overall Tip", body: "Context matters! Learn words with their common uses." },
    { title: "💬 Speaking Band Tip", body: "Demonstrate vocabulary range across all topics!" }
  ],

  // Vocabulary building strategies
  strategies: [
    { title: "🎯 Learning Strategy", body: "Group words by theme for better retention!" },
    { title: "🔄 Spaced Repetition", body: "Review words at increasing intervals for long-term memory!" },
    { title: "📝 Context Learning", body: "Always learn words in context, not isolation!" },
    { title: "🎨 Visualization", body: "Create mental images to remember vocabulary!" },
    { title: "🗣️ Active Usage", body: "Use new words in conversation to cement them!" },
    { title: "📚 Reading Power", body: "Read extensively to encounter words naturally!" },
    { title: "✍️ Writing Practice", body: "Write sentences using your new vocabulary!" },
    { title: "🎧 Audio Learning", body: "Listen to pronunciation and practice speaking!" },
    { title: "🔗 Word Families", body: "Learn related word forms together (noun, verb, adjective)!" },
    { title: "📖 Etymology", body: "Understanding word origins helps remember meanings!" }
  ],

  // Specific word categories for notifications
  wordCategories: [
    { category: "Education", emoji: "🎓" },
    { category: "Science/Technology", emoji: "🔬" },
    { category: "Environment", emoji: "🌍" },
    { category: "Health", emoji: "🏥" },
    { category: "Business", emoji: "💼" },
    { category: "Society", emoji: "👥" },
    { category: "Art/Creativity", emoji: "🎨" },
    { category: "Communication", emoji: "💬" }
  ],

  // Time-based greeting messages
  greetings: [
    { timeRange: [5, 11], title: "☀️ Good Morning", body: "Start your day with vocabulary learning!" },
    { timeRange: [12, 16], title: "🌤️ Good Afternoon", body: "Afternoon brain boost! Review your words." },
    { timeRange: [17, 20], title: "🌆 Good Evening", body: "Evening study session awaits you!" },
    { timeRange: [21, 23], title: "🌙 Evening Review", body: "Quick review before bed reinforces learning!" },
    { timeRange: [0, 4], title: "🌃 Late Night", body: "Studying late? Every effort counts!" }
  ]
};

// Generate 100 diverse notification messages
function generateNotificationPool() {
  const pool = [];

  // Add all motivational messages (15)
  pool.push(...notificationConfig.motivationalMessages);

  // Add all practice prompts (10)
  pool.push(...notificationConfig.practicePrompts);

  // Add all IELTS tips (10)
  pool.push(...notificationConfig.ieltsTooltips);

  // Add all strategies (10)
  pool.push(...notificationConfig.strategies);

  // Add greeting variations (5 base x 3 variations = 15)
  notificationConfig.greetings.forEach(greeting => {
    pool.push(greeting);
    pool.push({ title: greeting.title, body: "Time to boost your IELTS vocabulary!" });
    pool.push({ title: greeting.title, body: "Your daily VocaBoost reminder is here!" });
  });

  // Add category-specific reminders (8 categories x 3 variations = 24)
  notificationConfig.wordCategories.forEach(cat => {
    pool.push({
      title: `${cat.emoji} ${cat.category} Words`,
      body: `Review your ${cat.category.toLowerCase()} vocabulary today!`
    });
    pool.push({
      title: `${cat.emoji} Focus Time`,
      body: `Master ${cat.category.toLowerCase()} terms for IELTS success!`
    });
    pool.push({
      title: `${cat.emoji} Topic Review`,
      body: `Strengthen your ${cat.category.toLowerCase()} vocabulary now!`
    });
  });

  // Add achievement reminders (8)
  pool.push(
    { title: "🏆 Achievement Hunt", body: "Unlock new achievements by studying today!" },
    { title: "⭐ Milestone Alert", body: "You're close to your next achievement!" },
    { title: "💯 Perfect Score", body: "Aim for perfection in today's quiz!" },
    { title: "🔥 Streak Power", body: "Your learning streak is impressive! Keep it going!" },
    { title: "📈 Growth Mindset", body: "Track your progress and see how far you've come!" },
    { title: "🎯 Goal Achievement", body: "Every study session brings you closer to success!" },
    { title: "🌟 Excellence Tracker", body: "Check your stats and celebrate progress!" },
    { title: "💪 Commitment Badge", body: "Your dedication deserves recognition!" }
  );

  // Add flashcard reminders (8)
  pool.push(
    { title: "🎴 Flashcard Magic", body: "Flip through cards to strengthen memory!" },
    { title: "🔄 Quick Review", body: "5-minute flashcard session = big impact!" },
    { title: "📇 Card Practice", body: "Flashcards are your secret weapon for retention!" },
    { title: "✨ Memory Boost", body: "Use flashcards to lock in vocabulary!" },
    { title: "🎯 Focused Cards", body: "Study your challenging words with flashcards!" },
    { title: "💡 Visual Learning", body: "Flashcards engage your visual memory!" },
    { title: "🌈 Card Collection", body: "Your flashcard library is growing! Review it now." },
    { title: "🎨 Interactive Learning", body: "Make learning fun with interactive flashcards!" }
  );

  // Ensure we have at least 100 by adding general study reminders
  while (pool.length < 100) {
    pool.push({
      title: `📚 Study Reminder ${pool.length + 1}`,
      body: "VocaBoost is ready to help you learn today!"
    });
  }

  return pool.slice(0, 100); // Return exactly 100 notifications
}

// Get notification for specific time of day
function getNotificationForTime(hour, userWords = []) {
  const pool = generateNotificationPool();
  
  // Get appropriate greeting based on time
  const greeting = notificationConfig.greetings.find(g => 
    hour >= g.timeRange[0] && hour <= g.timeRange[1]
  );

  // If user has words, occasionally show a random word
  if (userWords.length > 0 && Math.random() > 0.4) {
    const randomWord = userWords[Math.floor(Math.random() * userWords.length)];
    return {
      title: `📚 Word of the Moment: ${randomWord.w}`,
      body: randomWord.m || `Review this word in VocaBoost!`,
      tag: 'vocabulary-word',
      icon: './icon-192.png',
      badge: './icon-192.png',
      data: { word: randomWord.w, url: '/' },
      requireInteraction: false,
      vibrate: [200, 100, 200]
    };
  }

  // Otherwise, use the notification pool (rotate through)
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const index = (dayOfYear + hour) % pool.length;
  const notification = pool[index];

  return {
    title: notification.title,
    body: notification.body,
    tag: 'vocaboost-reminder',
    icon: './icon-192.png',
    badge: './icon-192.png',
    data: { url: '/' },
    requireInteraction: false,
    vibrate: [200, 100, 200]
  };
}

// Schedule notifications throughout the day
function scheduleAllNotifications(userWords = []) {
  const notifications = [];
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  notificationConfig.schedule.forEach(time => {
    const notifTime = new Date(today);
    notifTime.setHours(time.hour, time.minute, 0, 0);

    // Only schedule future notifications for today
    if (notifTime > now) {
      const delay = notifTime - now;
      notifications.push({
        time: notifTime,
        delay: delay,
        notification: getNotificationForTime(time.hour, userWords)
      });
    }
  });

  return notifications;
}

// Get a random notification from the pool
function getRandomNotification(userWords = []) {
  const hour = new Date().getHours();
  return getNotificationForTime(hour, userWords);
}

// Export for use in main app and service worker
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    notificationConfig,
    generateNotificationPool,
    getNotificationForTime,
    scheduleAllNotifications,
    getRandomNotification
  };
}

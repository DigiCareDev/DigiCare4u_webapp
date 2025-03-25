import Link from 'next/link';

const BlogCard = () => {
  const blogContent = [
    {
      title: "Stay Connected with Real-Time Live Location Tracking – Accurate, Secure, and Seamless",
      date: "February 18, 2025",
      description: `Track your loved ones with accurate live location updates. Our advanced tracking system ensures that you always stay informed about the whereabouts of your family members, friends, or employees. With real-time GPS tracking, you can view their exact location on a map, helping you stay connected no matter where they are.
  Our technology uses high-precision GPS and Wi-Fi signals to provide real-time updates, ensuring you never have to worry about outdated location data. Whether you are monitoring your children’s school commute, ensuring the safety of elderly family members, or keeping an eye on employees during work hours, our live location feature makes it seamless.
  Additionally, our live location tracking comes with an intuitive user interface, allowing you to customize the settings as per your needs. You can set update intervals, adjust accuracy levels, and even enable low-power mode to optimize battery consumption. The system is designed to work across multiple devices, ensuring cross-platform compatibility for seamless tracking.
  Stay connected, stay informed, and keep your loved ones safe with the most advanced live location tracking system available today.`,
      imageSrc: "/images/Live_Location.jpg",
      tag: "#LiveLocation #RealTimeTracking #StayConnected #GPS #FamilySafety #EmployeeTracking #SecureTracking #LocationUpdates #TrackAnywhere #SmartTracking"
    },
    {
      title: "Instant Geofencing Alerts – Stay Notified of Important Movements in Real Time",
      date: "February 18, 2025",
      description: `Receive real-time alerts when someone enters or leaves a specified area. Our instant alert system ensures that you are always notified of important movements, allowing you to act quickly and efficiently.
  With the geofencing feature, you can set predefined boundaries on the map. Whenever a tracked individual enters or exits these areas, you’ll receive an immediate notification on your mobile app or web dashboard. This is particularly useful for parents who want to know when their children arrive at school or employees who need to track field agents’ movements.
  Our system supports multiple alerts for different locations, meaning you can track various places at the same time. Whether it’s home, school, office, or any other frequently visited location, you’ll always have real-time updates. Additionally, notifications can be customized based on your preferences, allowing you to choose between push notifications, SMS, or email alerts.
  With instant alerts, you gain peace of mind and a higher level of security, ensuring the safety of your loved ones and employees without constant manual checking.`,
      imageSrc: "/images/Instant_Alerts.jpg",
      tag: "#InstantAlerts #Geofencing #RealTimeNotifications #StaySafe #LocationAlerts #GPSAlert #TrackMovement #SecurityUpdate #AutomatedAlerts #SmartTracking"
    },
    {
      title: "Seamless Family Sharing – Stay Connected and Secure with Your Loved Ones",
      date: "February 18, 2025",
      description: `Easily add and manage multiple people within your tracking network. Our family sharing feature allows you to create a secure network where every member stays connected and informed.
  The process is simple: invite family members via email, SMS, or app link, and once they accept, they are added to your network. From there, you can view their location, receive alerts, and even communicate through the platform. This is perfect for parents keeping an eye on their kids, siblings checking in on each other, or ensuring elderly members’ safety.
  Each member can have personalized settings, allowing them to control what information they share and with whom. We prioritize security and privacy, ensuring that only authorized members have access to location details.
  Whether it’s planning meetups, ensuring safe travels, or just staying connected, family sharing makes it easy and effective.`,
      imageSrc: "/images/Family_Sharing.jpg",
      tag: "#FamilySharing #StayConnected #LocationTracking #GPSFamily #SecureSharing #SmartTracking #ConnectedFamily #SafeZone #PrivateNetwork #FamilyFirst"
    },
    {
      title: "Advanced Security & Privacy – Protecting Your Data with End-to-End Encryption",
      date: "February 18, 2025",
      description: `Your data is encrypted and secure, ensuring complete privacy. We understand the importance of keeping your personal information safe, which is why our platform uses advanced security protocols to protect your data.
  With end-to-end encryption, no unauthorized party can access your location history or tracking details. Our servers are protected with multiple layers of security, including firewalls and intrusion detection systems, ensuring that your data remains confidential.
  Users have full control over their privacy settings, allowing them to adjust who can see their location and when. You can enable temporary sharing, restrict access to specific individuals, or even use anonymous mode when needed.
  In compliance with global privacy laws, our platform does not sell or share your data with third parties. You can trust that your personal information remains private and secure at all times.`,
      imageSrc: "/images/Privacy_&_Security.jpg",
      tag: "#PrivacyFirst #SecureTracking #DataProtection #EncryptedData #CyberSecurity #GPSPrivacy #UserControl #NoDataSharing #StaySafe #SafeTracking"
    },
    {
      title: "Smart Task Scheduling – Stay Organized, Productive, and On Track",
      date: "February 18, 2025",
      description: `Plan and manage daily tasks efficiently for better productivity. Our integrated task scheduling feature allows users to create to-do lists, set reminders, and automate routines.
  You can assign tasks to yourself or others within your network, ensuring everyone stays on track. With calendar integration, due dates, and push notifications, our task manager helps keep your day organized and productive.
  Users can also categorize tasks based on urgency and importance, helping prioritize what needs to be done first. Whether it’s work-related deadlines, personal errands, or family schedules, the task scheduler keeps everything streamlined.
  Stay efficient and never miss a deadline with our task scheduling tool.`,
      imageSrc: "/images/smart_task_scheduling.jpg",
      tag: "#TaskManagement #StayOrganized #ProductivityBoost #SmartScheduling #DailyPlanner #EfficientLife #ManageTasks #GetThingsDone #ToDoList #PlanAhead"
    },
    {
      title: "Advanced Analytics – Gain Insights, Track Trends, and Optimize Activity",
      date: "February 18, 2025",
      description: `Gain meaningful insights and track activity trends over time. Our analytics feature provides valuable data on movement patterns, frequently visited locations, and overall activity trends.
  This feature is especially useful for businesses tracking employee productivity, parents monitoring children’s movement habits, and individuals analyzing their travel patterns.
  Detailed reports, visual charts, and heat maps make it easy to interpret data. With historical insights, you can make informed decisions for better efficiency and security.`,
      imageSrc: "/images/advanced_analytics.jpg",
      tag: "#DataAnalytics #Insights #TrackTrends #ActivityMonitoring #SmartData #AITracking #LocationInsights #PatternAnalysis #UserBehavior #DecisionMaking"
    },
    {
      title: "Tracking Timeline – View Location History and Movement Patterns with Ease",
      date: "February 18, 2025",
      description: `View historical location data and track movement over time. The timeline feature provides a clear history of past locations, allowing users to review previous routes, stops, and movement trends.
  With this feature, users can retrieve information on where they’ve been, how much time they spent in each location, and view detailed logs. This is useful for verifying past movements, optimizing travel routes, or maintaining records for work or safety purposes.`,
      imageSrc: "/images/tracking_timeline.jpg",
      tag: "#LocationHistory #TrackingTimeline #StayUpdated #RouteLogs #MovementHistory #GPSData #SmartTracking #HistoricalData #LocationReview #SecurityTracking"
    },
    {
      title: "Cloud-Based Web Dashboard – Access Real-Time Tracking Anytime, Anywhere",
      date: "February 18, 2025",
      description: `Access your dashboard from any device with our web application. Our cloud-based tracking system ensures that you can monitor locations, manage settings, and analyze data from your computer, tablet, or phone.
  The web interface is user-friendly, featuring an interactive dashboard where you can view real-time locations, set alerts, and access reports. No matter where you are, staying connected is just a browser away.`,
      imageSrc: "/images/web_dashboard.jpg",
      tag: "#WebTracking #DashboardAccess #SmartMonitoring #StayConnected #LocationSecurity #CrossPlatform #UserFriendly #DataAccess #OnlineTracking #SecureWeb"
    },
    {
      title: "Smart Mobile App – Seamless Tracking and Instant Alerts on the Go",
      date: "February 18, 2025",
      description: `Stay connected on the go with our easy-to-use mobile application. Our app is designed for both Android and iOS devices, providing seamless tracking, instant notifications, and easy navigation.
  With an intuitive interface, users can quickly check real-time locations, receive alerts, and communicate within the platform. The mobile app ensures that tracking is always within reach, no matter where you are.`,
      imageSrc: "/images/smart_task_scheduling.jpg",
      tag: "#MobileTracking #StayMobile #TrackOnTheGo #SmartApp #GPSLocator #UserFriendlyApp #LocationServices #InstantUpdates #ConnectedAnywhere #EffortlessTracking"
    },
  ];

  const truncateDescription = (description, maxLength = 150) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <div className="grid grid-cols-1 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 mx-10">
      {blogContent.map((content, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link
            href={{
              pathname: "/blog/blogDetails",
              query: {
                title: content.title,
                date: content.date,
                description: content.description,
                imageSrc: content.imageSrc,
                tag: content.tag
              },
            }}
          >
            <img className="rounded-t-lg" src={content.imageSrc} alt={content.title} />
          </Link>
          <div className="p-5">
            <Link
              href={{
                pathname: "/blog/blogDetails",
                query: {
                  title: content.title,
                  description: content.description,
                  imageSrc: content.imageSrc,
                  date: content.date,
                  tag: content.tag
                },
              }}
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {content.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {truncateDescription(content.description)}
            </p>
            <p className="text-gray-500 text-sm mb-2">Published on: {content.date}</p>
            <Link
              href={{
                pathname: "/blog/blogDetails",
                query: {
                  title: content.title,
                  description: content.description,
                  imageSrc: content.imageSrc,
                  date: content.date, 
                  tag: content.tag
                },
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;


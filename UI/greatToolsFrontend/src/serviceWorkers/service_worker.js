self.addEventListener("push", function (event) {
  const options = {
    body: event.data.text(),
    icon: "icon.png", // Replace with your icon URL
  };

  event.waitUntil(
    self.registration.showNotification("Push Notification", options)
  );
});

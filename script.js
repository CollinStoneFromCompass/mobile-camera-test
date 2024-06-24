document
  .getElementById("accessCameraBtn")
  .addEventListener("click", async () => {
    const dialog = document.getElementById("dialog");
    const video = document.getElementById("video");

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      dialog.style.display = "block";
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  });

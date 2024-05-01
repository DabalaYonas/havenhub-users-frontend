'use client';
import { MdOutlineFileUpload } from "react-icons/md";
function UploadView(props) {
        function Init() {
      
          console.log("Upload Initialised");
          // Is XHR2 available?
          var xhr = new XMLHttpRequest();
        }
      
        function fileDragHover(e) {
          var fileDrag = document.getElementById('file-drag');
      
          e.stopPropagation();
          e.preventDefault();
      
          fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
        }
      
        function fileSelectHandler(e) {
          // Fetch FileList object
          var files = e.target.files || e.dataTransfer.files;
      
          // Cancel event and hover styling
          fileDragHover(e);
      
          // Process all File objects
          for (var i = 0, f; f = files[i]; i++) {
            parseFile(f);
            uploadFile(f);
          }
        }
      
        // Output
        function output(msg) {
          // Response
          var m = document.getElementById('messages');
          m.innerHTML = msg;
        }
      
        function parseFile(file) {
      
          console.log(file.name);
          output(
            '<strong>' + encodeURI(file.name) + '</strong>'
          );
          var imageName = file.name;
      
          var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
          if (isGood) {
            document.getElementById('start').classList.add("hidden");
            document.getElementById('response').classList.remove("hidden");
            document.getElementById('notimage').classList.add("hidden");
            // Thumbnail Preview
            document.getElementById('file-image').classList.remove("hidden");
            document.getElementById('file-image').src = URL.createObjectURL(file);
          }
          else {
            document.getElementById('file-image').classList.add("hidden");
            document.getElementById('notimage').classList.remove("hidden");
            document.getElementById('start').classList.remove("hidden");
            document.getElementById('response').classList.add("hidden");
          }
        }
      
        function setProgressMaxValue(e) {
          var pBar = document.getElementById('file-progress');
      
          if (e.lengthComputable) {
            pBar.max = e.total;
          }
        }
      
        function updateFileProgress(e) {
          var pBar = document.getElementById('file-progress');
      
          if (e.lengthComputable) {
            pBar.value = e.loaded;
          }
        }
      
        function uploadFile(file) {
      
          var xhr = new XMLHttpRequest(),
            fileInput = document.getElementById('class-roster-file'),
            pBar = document.getElementById('file-progress'),
            fileSizeLimit = 1024; // In MB
          if (xhr.upload) {
            // Check if file is less than x MB
            if (file.size <= fileSizeLimit * 1024 * 1024) {
              // Progress bar
              pBar.style.display = 'inline';
              xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
              xhr.upload.addEventListener('progress', updateFileProgress, false);
      
              // File received / failed
              xhr.onreadystatechange = function(e) {
                if (xhr.readyState == 4) {
                  // Everything is good!
      
                  // progress.className = (xhr.status == 200 ? "success" : "failure");
                  // document.location.reload(true);
                }
              };
      
              // Start upload
              xhr.open('POST', document.getElementById('file-upload-form').action, true);
              xhr.setRequestHeader('X-File-Name', file.name);
              xhr.setRequestHeader('X-File-Size', file.size);
              xhr.setRequestHeader('Content-Type', 'multipart/form-data');
              xhr.send(file);
              
              props.setImageInput(file);

            } else {
              output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
            }
          }
        }
      
        // Check for the various File API support.
        if (window.File && window.FileList && window.FileReader) {
          Init();
        } else {
          document.getElementById('file-drag').style.display = 'none';
        }
    //   }
    //   ekUpload();

    return <><div className="text-center block" id="file-upload-form">
      <input className="hidden" id="file-upload" type="file" name="fileUpload" accept="image/*" onChange={fileSelectHandler} />

      <label className="block w-full px-6 py-8 text-center bg-white rounded-lg border-gray-100 border-4 transition-all select-none hover:border-sky-700 hover:shadow-md" htmlFor="file-upload" id="file-drag" onDragOver={fileDragHover} onDragLeave={fileDragHover} onDrag={fileSelectHandler}>
          <img className="hidden mx-auto mb-2 w-auto h-auto max-w-44"  id="file-image" src="#" alt="Preview" />
          <div className="flex flex-col items-center mb-2 text-slate-500 w-full" id="start">
              <MdOutlineFileUpload size={36}/>
              <div className="mb-2 text-slate-500">Upload your place image</div>
                  <div id="notimage" className="block float-left clear-both w-full">Please select an image</div>
                  <span id="file-upload-btn" className="hidden mt-2 mb-4 mx-2 clear-both font-bold text-sm rounded outline-none py-0 px-4 h-9 text-white company-color cursor-pointer btn-primary">Select an image</span>
          </div>
          <div id="response" className="hidden mb-2 text-slate-500 w-full">
              <div id="messages" className="mb-2"></div>
              <progress className="inline clear-both mx-auto my-0 w-full max-w-44 h-2 border rounded bg-slate-100 overflow-hidden" id="file-progress" value="0">
                  <span>0</span>%
              </progress>
          </div>
      </label>
  </div></>
}

export default UploadView;
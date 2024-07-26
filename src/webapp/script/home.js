const tenant_html = `
    <div class="modal_text">City/Street</div>
        <div class="input_div">
            <svg
            id="location_icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                stroke="#000000"
                stroke-width="1.5"
            />
            <path
                d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                stroke="#000000"
                stroke-width="1.5"
            />
            </svg>
            <select class="modal_input modal_input_icon" name="city">
            <option value="Amsterdam">Amsterdam</option>
            <option value="Rotterdam">Rotterdam</option>
            <option value="Utrecht">Utrecht</option>
            </select>
            <svg
            onclick="showLocations(event)"
            class="arrow_down"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 8px"
            >
            <path
                d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                stroke="#000000"
                stroke-width="5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
        </div>
        <div class="modal_text">Roommate Preference</div>
        <div class="input_div">
            <select class="modal_input" name="roommate">
            <option value="None">None</option>
            <option value="1">1</option>
            <option value="2+">2+</option>
            </select>
            <svg
            class="arrow_down"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 8px"
            >
            <path
                d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                stroke="#000000"
                stroke-width="5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
        </div>
        <div class="modal_text">Monthly Budget</div>
        <div class="input_div">
            <select class="modal_input" name="budget">
            <option value="€250-750">€250-750</option>
            <option value="€750-1200">€750-1200</option>
            <option value="€1200-2000">€1200-2000</option>
            </select>
            <svg
            class="arrow_down"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 8px"
            >
            <path
                d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                stroke="#000000"
                stroke-width="5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
        </div>
    </div>
`;

const landlord_html = `
    <div class="modal_text">City/Street</div>
    <div class="input_div">
        <svg
            id="location_icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
        <path
            d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
            stroke="#000000"
            stroke-width="1.5"
        />
        <path
            d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
            stroke="#000000"
            stroke-width="1.5"
        />
        </svg>
        <select class="modal_input modal_input_icon" name="city">
            <option value="Amsterdam">Amsterdam</option>
            <option value="Rotterdam">Rotterdam</option>
            <option value="Utrecht">Utrecht</option>
        </select>
        <svg
            onclick="showLocations(event)"
            class="arrow_down"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 8px"
        >
        <path
            d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
            stroke="#000000"
            stroke-width="5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        </svg>
    </div>
    <div class="modal_text">Tenant Income</div>
    <div class="input_div">
        <select class="modal_input" name="income">
            <option value="€500-1000">€500-1000</option>
            <option value="€1001-1500">€1001-1500</option>
            <option value="€1500-2000">€1500-2000</option>
        </select>
        <svg
        class="arrow_down"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="margin-left: 8px"
        >
        <path
            d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
            stroke="#000000"
            stroke-width="5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        </svg>
    </div>
`;

const search = (e) => {
  e.preventDefault();
  alert("Search button clicked");
};

const showLocations = (e) => {
  alert("Query Locations and Trigger Display");
};

const toggleForm = (e) => {
  e.preventDefault();
  const button = e.target;
  if (button.id.includes("tenant")) {
    const modal_body = document.getElementById("modal_body");
    modal_body.innerHTML = tenant_html;
    removeClass(".modal_button", "modal_button_selected");
    button.classList.add("modal_button_selected");
  } else {
    const modal_body = document.getElementById("modal_body");
    modal_body.innerHTML = landlord_html;
    removeClass(".modal_button", "modal_button_selected");
    button.classList.add("modal_button_selected");
  }
};

const removeClass = (elementClass, className) => {
  const elements = document.querySelectorAll(elementClass);
  elements.forEach((element) => {
    element.classList.remove(className);
  });
};

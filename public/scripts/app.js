class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.formFilter = document.getElementById("form_filter_submit");
    this.typeDriverSelect = document.getElementById("type_driver");
    this.dateBookingInput = document.getElementById("date_booking");
    this.timeBookingSelect = document.getElementById("booking_time");
    this.totalPassengersInput = document.getElementById("total_passengers");

    this.clearButton.addEventListener("click", this.clear);
    this.loadButton.addEventListener("click", this.run);
    this.formFilter.addEventListener("submit", this.onFilteredCar);
  }

  async init() {
    await this.load();
  }

  run = () => {
    console.log("BEFORE:", Car.list.length);
    this.renderCarList();
  };

  onFilteredCar = async (event) => {
    event.preventDefault();
    this.clear();

    const bookingDatesTime = this.dateBookingInput.value + "T" + this.timeBookingSelect.value;
    const bookingDates = Date.parse(bookingDatesTime);

    const filteredCar = await Binar.listCars((data) => {
      const dateAvailable = Date.parse(data.availableAt);
      return dateAvailable >= bookingDates && data.capacity >= this.totalPassengersInput.value;
    });

    Car.init(filteredCar);
    this.run();
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    this.carContainerElement.innerHTML = "";
  };

  renderCarList() {
    this.carContainerElement.innerHTML = Car.list.map((car) => `<div>${car.render()}</div>`).join("");
  }
}

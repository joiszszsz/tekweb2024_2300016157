// Ambil elemen DOM
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const bgColorPicker = document.getElementById('bg-color');
const fontSizeSlider = document.getElementById('font-size');
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const fontStyleSelector = document.getElementById('font-style');
const body = document.body;

// Fungsi untuk menambah tugas ke To-Do List
function addTask() {
    const taskText = taskInput.value.trim(); // Menghilangkan spasi berlebih

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Tambah tombol hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.style.marginLeft = '10px';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '5px';

    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    taskInput.value = ''; // Bersihkan input
}

// Event listener untuk tombol "Add Task"
addTaskButton.addEventListener('click', addTask);

// Tambah tugas dengan tombol Enter
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Ubah warna latar belakang sesuai input user
bgColorPicker.addEventListener('input', function (event) {
    body.style.backgroundColor = event.target.value;
});

// Ubah ukuran font sesuai slider
fontSizeSlider.addEventListener('input', function (event) {
    body.style.fontSize = event.target.value + 'px';
});

// Toggle Dark Mode
toggleDarkModeButton.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
});

// Ubah gaya font berdasarkan pilihan
fontStyleSelector.addEventListener('change', function (event) {
    body.style.fontFamily = event.target.value;
});
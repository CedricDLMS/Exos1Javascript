export const css = `/* Style for the body to center everything */
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f2f5;
    font-family: 'Arial', sans-serif;
}

/* Style for the parent div */
.parentDiv {
    width: 320px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
}

/* Style for the form */
.parentForm {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

/* Style for the inputs */
.parentForm input[type="number"] {
    width: calc(100% - 22px); /* Adjust width to account for padding and border */
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
}

/* Style for the swap button */
.parentForm input[type="button"] {
    width: 40px;
    padding: 10px 10px 13px 10px;
    margin: 5px auto;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 10%;
    cursor: pointer;
    font-size: 20px;
    line-height: 0;
    transition: background-color 0.3s ease;
}

.parentForm input[type="button"]:hover {
    background-color: #0056b3;
}

/* Responsive styling for smaller screens */
@media (max-width: 480px) {
    .parentDiv {
        width: 90%;
    }
}
`;
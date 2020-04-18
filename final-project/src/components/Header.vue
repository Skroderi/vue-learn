<template>
  <nav class="navbar navbar-light bg-light">
    <ul>
      <li>
        <router-link to="/" tag="a" active-class="active" exact>Stock Trader</router-link>
      </li>
      <li>
        <a href>Portfolio</a>
      </li>
      <li>
        <router-link to="/stocks" tag="a" active-class="active">Stocks</router-link>
      </li>
    </ul>

    <ul>
      <li>
        <a href>End Day</a>
      </li>
      <li>
        <a href>Save & Load</a>
      </li>
      <li>
        <a href>Founds</a>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: space-between;
  background: lightgray;
  padding: 5px;
  border: 2px solid grey;
  margin-bottom: 30px;
}

ul {
  display: flex;
  list-style: none;
}

li {
  padding: 5px 10px;
}
a {
  text-decoration: none;
  color: black;
  font-size: 20px;
}
a:hover {
  border-bottom: 1px solid black;
}

.active {
  font-weight: 700;
  border-bottom: 2px solid black;
}
</style>

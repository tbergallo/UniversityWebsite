<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración - Universidad de San Andrés</title>
    <link rel="stylesheet" href="admin-dashboard.css">
</head>
<body>
    <nav class="navbar">
        <div class="logo">
            <h1>Universidad de San Andrés</h1>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#" class="active">Dashboard</a></li>
            <li><a href="#" class="logout-btn">Cerrar Sesión</a></li>
        </ul>
    </nav>

    <main class="dashboard-container">
        <h1>Panel de Administración</h1>

        <div class="dashboard-grid">
            <div class="dashboard-card" data-section="alumnos">
                <div class="card-icon">👥</div>
                <h3>Gestión de Alumnos</h3>
                <p>Inscribir, consultar y administrar información de estudiantes</p>
            </div>

            <div class="dashboard-card" data-section="carreras">
                <div class="card-icon">📚</div>
                <h3>Gestión de Carreras</h3>
                <p>Crear, modificar y consultar programas académicos</p>
            </div>

            <div class="dashboard-card" data-section="inscripciones">
                <div class="card-icon">📝</div>
                <h3>Inscripciones</h3>
                <p>Proceso de inscripción de nuevos y antiguos estudiantes</p>
            </div>

            <div class="dashboard-card" data-section="reportes">
                <div class="card-icon">📊</div>
                <h3>Reportes</h3>
                <p>Estadísticas y seguimiento académico</p>
            </div>
        </div>
    </main>

    <script src="admin-dashboard.js"></script>
</body>
</html>

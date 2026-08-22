CREATE DATABASE IF NOT EXISTS globetrotter;

USE globetrotter;

-- =========================================
-- USERS
-- =========================================

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL UNIQUE,

    password_hash VARCHAR(255) NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);


-- =========================================
-- CITIES
-- =========================================

CREATE TABLE IF NOT EXISTS cities (
    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(120) NOT NULL,

    country VARCHAR(120) NOT NULL,

    region VARCHAR(120),

    latitude DECIMAL(10,7),

    longitude DECIMAL(10,7),

    UNIQUE KEY unique_city_country(name, country)
);


-- =========================================
-- ACTIVITIES
-- =========================================

CREATE TABLE IF NOT EXISTS activities (
    id INT AUTO_INCREMENT PRIMARY KEY,

    city_id INT,

    name VARCHAR(150) NOT NULL,

    type VARCHAR(80) NOT NULL,

    description TEXT,

    duration_hours DECIMAL(5,2) DEFAULT 1,

    cost DECIMAL(10,2) DEFAULT 0,

    FOREIGN KEY(city_id)
        REFERENCES cities(id)
        ON DELETE SET NULL
);


-- =========================================
-- TRIPS
-- =========================================

CREATE TABLE IF NOT EXISTS trips (
    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    start_date DATE NOT NULL,

    end_date DATE NOT NULL,

    budget DECIMAL(12,2) DEFAULT 0,

    is_public BOOLEAN DEFAULT FALSE,

    share_id VARCHAR(64) UNIQUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);


-- =========================================
-- TRIP STOPS
-- =========================================

CREATE TABLE IF NOT EXISTS trip_stops (
    id INT AUTO_INCREMENT PRIMARY KEY,

    trip_id INT NOT NULL,

    city_id INT NOT NULL,

    stop_date DATE NOT NULL,

    end_date DATE NOT NULL,

    transport VARCHAR(150),

    accommodation VARCHAR(200),

    notes TEXT,

    stop_order INT DEFAULT 1,

    FOREIGN KEY(trip_id)
        REFERENCES trips(id)
        ON DELETE CASCADE,

    FOREIGN KEY(city_id)
        REFERENCES cities(id)
);


-- =========================================
-- STOP ACTIVITIES
-- MANY TO MANY
-- =========================================

CREATE TABLE IF NOT EXISTS stop_activities (

    stop_id INT NOT NULL,

    activity_id INT NOT NULL,

    PRIMARY KEY(stop_id, activity_id),

    FOREIGN KEY(stop_id)
        REFERENCES trip_stops(id)
        ON DELETE CASCADE,

    FOREIGN KEY(activity_id)
        REFERENCES activities(id)
        ON DELETE CASCADE
);


-- =========================================
-- EXPENSES
-- =========================================

CREATE TABLE IF NOT EXISTS expenses (

    id INT AUTO_INCREMENT PRIMARY KEY,

    trip_id INT NOT NULL,

    category ENUM(
        'transport',
        'accommodation',
        'activities',
        'meals',
        'other'
    ) NOT NULL,

    description VARCHAR(255),

    amount DECIMAL(12,2) NOT NULL,

    expense_date DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(trip_id)
        REFERENCES trips(id)
        ON DELETE CASCADE
);


-- =========================================
-- SAMPLE CITIES
-- =========================================

INSERT INTO cities
(name, country, region, latitude, longitude)
VALUES

('Paris', 'France', 'Europe', 48.8566000, 2.3522000),

('London', 'United Kingdom', 'Europe', 51.5074000, -0.1278000),

('Rome', 'Italy', 'Europe', 41.9028000, 12.4964000),

('Dubai', 'United Arab Emirates', 'Asia', 25.2048000, 55.2708000),

('Tokyo', 'Japan', 'Asia', 35.6762000, 139.6503000),

('Mumbai', 'India', 'Asia', 19.0760000, 72.8777000),

('Delhi', 'India', 'Asia', 28.6139000, 77.2090000),

('New York', 'United States', 'North America', 40.7128000, -74.0060000)

ON DUPLICATE KEY UPDATE
region = VALUES(region);


-- =========================================
-- SAMPLE ACTIVITIES
-- =========================================

INSERT INTO activities
(city_id, name, type, description, duration_hours, cost)

SELECT
id,
'Eiffel Tower Visit',
'sightseeing',
'Visit the Eiffel Tower',
2,
35

FROM cities

WHERE name = 'Paris'
AND country = 'France';


INSERT INTO activities
(city_id, name, type, description, duration_hours, cost)

SELECT
id,
'Seine River Cruise',
'relaxation',
'Scenic cruise along Seine river',
2,
25

FROM cities

WHERE name = 'Paris'
AND country = 'France';


INSERT INTO activities
(city_id, name, type, description, duration_hours, cost)

SELECT
id,
'Colosseum Tour',
'history',
'Visit the famous Colosseum',
2.5,
45

FROM cities

WHERE name = 'Rome'
AND country = 'Italy';


INSERT INTO activities
(city_id, name, type, description, duration_hours, cost)

SELECT
id,
'Desert Safari',
'adventure',
'Desert safari experience',
5,
80

FROM cities

WHERE name = 'Dubai'
AND country = 'United Arab Emirates';


INSERT INTO activities
(city_id, name, type, description, duration_hours, cost)

SELECT
id,
'Shibuya Walking Tour',
'adventure',
'Explore Shibuya',
2,
20

FROM cities

WHERE name = 'Tokyo'
AND country = 'Japan';
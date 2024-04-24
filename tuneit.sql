-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2020 at 04:35 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tuneit`
--

-- --------------------------------------------------------

--
-- Table structure for table `favourite`
--

CREATE TABLE `favourite` (
  `id` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `preview` varchar(100) NOT NULL,
  `track_title` varchar(100) NOT NULL,
  `artist_id` int(11) NOT NULL,
  `artist_name` varchar(100) NOT NULL,
  `album_name` varchar(100) NOT NULL,
  `album_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `favourite`
--

INSERT INTO `favourite` (`id`, `uid`, `preview`, `track_title`, `artist_id`, `artist_name`, `album_name`, `album_id`) VALUES
(94, 48, 'https://cdns-preview-b.dzcdn.net/stream/c-b6dd7f8ae8a13ece02577953fda070c6-5.mp3', 'Welcome To New York', 12246, 'Taylor Swift', '1989 (Deluxe)', 9007781),
(95, 48, 'https://cdns-preview-b.dzcdn.net/stream/c-bac1f1029b2e1bf1eb1f5ac4cba6fcca-5.mp3', 'Blank Space', 12246, 'Taylor Swift', '1989 (Deluxe)', 9007781),
(97, 49, 'https://cdns-preview-1.dzcdn.net/stream/c-1b4ffe64d0b331638c0a6dda1347e081-2.mp3', 'Phutki Jaaney Jovan', 11964861, 'Sajjan Raj Vaidya', 'Phutki Jaaney Jovan', 149570482);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `password`, `created_at`) VALUES
(48, 'aadarsha', 'admin', '2020-02-08 14:00:35'),
(49, 'admin', 'admin', '2020-06-05 10:23:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `favourite`
--
ALTER TABLE `favourite`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `favourite`
--
ALTER TABLE `favourite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

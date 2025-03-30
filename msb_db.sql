-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2025 at 02:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `msb_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `credentials`
--

CREATE TABLE `credentials` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `role` enum('admin','staff') NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `credentials`
--

INSERT INTO `credentials` (`id`, `first_name`, `last_name`, `email`, `contact_number`, `password`, `position`, `role`, `creation_date`, `modified_date`) VALUES
(1, 'Jefferson', 'Talagtag', 'jeff@email.com', '09054163430', '$2a$10$HIihtDf4zUU6QjNSPqSPN.LkBdbwrPt9uP.6dkxkrCiNCOVOL/Mwi', 'Curator', 'admin', '2025-03-30 10:27:13', '2025-03-30 10:27:13'),
(2, 'John Russel', 'Digga', 'guiwan@email.com', '09234567890', '$2a$10$HIihtDf4zUU6QjNSPqSPN.LkBdbwrPt9uP.6dkxkrCiNCOVOL/Mwi', 'Archivist', 'staff', '2025-03-30 10:27:13', '2025-03-30 10:27:13');

-- --------------------------------------------------------

--
-- Table structure for table `logging`
--

CREATE TABLE `logging` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `reason` varchar(255) NOT NULL,
  `method` enum('update','add','edit','delete') NOT NULL,
  `affected_resource` varchar(255) NOT NULL,
  `location` enum('donation','articles','artifacts','appointment','users') NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login_logs`
--

CREATE TABLE `login_logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `start` timestamp NULL DEFAULT NULL,
  `end` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_logs`
--

INSERT INTO `login_logs` (`id`, `user_id`, `last_login`, `start`, `end`) VALUES
(1, 1, '2025-03-30 11:43:33', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(2, 1, '2025-03-30 11:43:33', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(3, 1, '2025-03-30 11:46:46', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(9, 2, '2025-03-30 12:08:06', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(10, 1, '2025-03-30 12:10:20', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(11, 1, '2025-03-30 12:13:37', '2025-03-30 12:13:25', '2025-03-30 12:13:37'),
(12, 2, '2025-03-30 12:15:56', '2025-03-30 12:15:43', '2025-03-30 12:15:56'),
(13, 2, '2025-03-30 12:21:38', '2025-03-30 12:21:08', '2025-03-30 12:21:38'),
(14, 2, '2025-03-30 12:27:29', '2025-03-30 12:27:29', NULL),
(15, 2, '2025-03-30 12:27:33', '2025-03-30 12:27:33', NULL),
(16, 2, '2025-03-30 12:28:38', '2025-03-30 12:28:38', NULL),
(17, 1, '2025-03-30 12:28:48', '2025-03-30 12:28:48', NULL),
(18, 1, '2025-03-30 12:30:04', '2025-03-30 12:30:04', NULL),
(19, 1, '2025-03-30 12:31:06', '2025-03-30 12:30:53', '2025-03-30 12:31:06'),
(20, 2, '2025-03-30 12:32:48', '2025-03-30 12:32:43', '2025-03-30 12:32:48'),
(21, 1, '2025-03-30 12:33:20', '2025-03-30 12:33:18', '2025-03-30 12:33:20'),
(22, 2, '2025-03-30 12:33:33', '2025-03-30 12:33:22', '2025-03-30 12:33:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `credential_id` int(11) NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'inactive',
  `creation_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `credential_id`, `status`, `creation_date`, `modified_date`) VALUES
(1, 1, 'inactive', '2025-03-30 10:37:21', '2025-03-30 12:33:20'),
(2, 2, 'inactive', '2025-03-30 11:47:33', '2025-03-30 12:33:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `logging`
--
ALTER TABLE `logging`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `login_logs`
--
ALTER TABLE `login_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_login` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `credential_id` (`credential_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `credentials`
--
ALTER TABLE `credentials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `logging`
--
ALTER TABLE `logging`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login_logs`
--
ALTER TABLE `login_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `logging`
--
ALTER TABLE `logging`
  ADD CONSTRAINT `logging_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `login_logs`
--
ALTER TABLE `login_logs`
  ADD CONSTRAINT `fk_user_login` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`credential_id`) REFERENCES `credentials` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

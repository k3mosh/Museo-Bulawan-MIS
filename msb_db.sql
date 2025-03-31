-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 31, 2025 at 12:06 PM
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
(2, 'John Russel', 'Digga', 'guiwan@email.com', '09234567890', '$2a$10$HIihtDf4zUU6QjNSPqSPN.LkBdbwrPt9uP.6dkxkrCiNCOVOL/Mwi', 'Archivist', 'staff', '2025-03-30 10:27:13', '2025-03-30 10:27:13'),
(3, 'Allen Jepte', 'Mateo', 'allen@email.com', '09123456789', '$2a$10$Y3tWIlbD/Uxd4QEnJk93TOHlrPv.aWqjsnT6TNvjmE.XAf43g79M.', 'Secretary', 'admin', '2025-03-31 09:28:52', '2025-03-31 09:28:52');

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
  `credential_id` int(11) NOT NULL,
  `last_login` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `start` timestamp NULL DEFAULT NULL,
  `end` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login_logs`
--

INSERT INTO `login_logs` (`id`, `credential_id`, `last_login`, `start`, `end`) VALUES
(1, 1, '2025-03-30 11:43:33', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(2, 1, '2025-03-30 11:43:33', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(3, 1, '2025-03-30 11:46:46', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(9, 2, '2025-03-30 12:08:06', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(10, 1, '2025-03-30 12:10:20', '2025-03-29 16:00:00', '2025-03-29 16:00:00'),
(11, 1, '2025-03-30 12:13:37', '2025-03-30 12:13:25', '2025-03-30 12:13:37'),
(12, 2, '2025-03-30 12:15:56', '2025-03-30 12:15:43', '2025-03-30 12:15:56'),
(13, 2, '2025-03-30 12:21:38', '2025-03-30 12:21:08', '2025-03-30 12:21:38'),
(19, 1, '2025-03-30 12:31:06', '2025-03-30 12:30:53', '2025-03-30 12:31:06'),
(20, 2, '2025-03-30 12:32:48', '2025-03-30 12:32:43', '2025-03-30 12:32:48'),
(21, 1, '2025-03-30 12:33:20', '2025-03-30 12:33:18', '2025-03-30 12:33:20'),
(22, 2, '2025-03-30 12:33:33', '2025-03-30 12:33:22', '2025-03-30 12:33:33'),
(23, 2, '2025-03-31 01:47:17', '2025-03-31 01:46:59', '2025-03-31 01:47:17'),
(24, 2, '2025-03-31 02:13:18', '2025-03-31 02:13:04', '2025-03-31 02:13:18'),
(25, 1, '2025-03-31 09:51:42', '2025-03-31 02:28:22', '2025-03-31 09:51:42'),
(26, 1, '2025-03-31 04:59:34', '2025-03-31 04:29:37', '2025-03-31 04:59:34'),
(27, 2, '2025-03-31 05:03:58', '2025-03-31 05:03:55', '2025-03-31 05:03:58'),
(28, 1, '2025-03-31 05:04:16', '2025-03-31 05:04:03', '2025-03-31 05:04:16'),
(29, 2, '2025-03-31 05:04:43', '2025-03-31 05:04:19', '2025-03-31 05:04:43'),
(31, 2, '2025-03-31 05:57:51', '2025-03-31 05:57:51', NULL),
(32, 1, '2025-03-31 07:52:13', '2025-03-31 07:19:10', '2025-03-31 07:52:13'),
(33, 2, '2025-03-31 07:52:21', '2025-03-31 07:52:16', '2025-03-31 07:52:21'),
(34, 1, '2025-03-31 08:08:52', '2025-03-31 07:52:24', '2025-03-31 08:08:52'),
(35, 2, '2025-03-31 08:09:09', '2025-03-31 08:08:55', '2025-03-31 08:09:09'),
(36, 1, '2025-03-31 08:09:18', '2025-03-31 08:09:13', '2025-03-31 08:09:18'),
(37, 2, '2025-03-31 08:09:27', '2025-03-31 08:09:21', '2025-03-31 08:09:27'),
(38, 1, '2025-03-31 08:24:29', '2025-03-31 08:09:30', '2025-03-31 08:24:29'),
(39, 2, '2025-03-31 08:24:55', '2025-03-31 08:24:46', '2025-03-31 08:24:55'),
(40, 1, '2025-03-31 08:33:06', '2025-03-31 08:24:57', '2025-03-31 08:33:06'),
(41, 1, '2025-03-31 08:34:21', '2025-03-31 08:33:08', '2025-03-31 08:34:21'),
(42, 1, '2025-03-31 09:09:31', '2025-03-31 08:34:24', '2025-03-31 09:09:31'),
(43, 2, '2025-03-31 09:28:59', '2025-03-31 09:09:34', '2025-03-31 09:28:59'),
(44, 3, '2025-03-31 09:29:17', '2025-03-31 09:29:06', '2025-03-31 09:29:17'),
(45, 1, '2025-03-31 09:29:46', '2025-03-31 09:29:37', '2025-03-31 09:29:45'),
(46, 3, '2025-03-31 09:31:16', '2025-03-31 09:30:32', '2025-03-31 09:31:16'),
(47, 1, '2025-03-31 09:39:36', '2025-03-31 09:31:19', '2025-03-31 09:39:36'),
(48, 3, '2025-03-31 09:43:55', '2025-03-31 09:39:45', '2025-03-31 09:43:55'),
(49, 3, '2025-03-31 09:47:12', '2025-03-31 09:44:11', '2025-03-31 09:47:12'),
(50, 3, '2025-03-31 09:50:57', '2025-03-31 09:47:19', '2025-03-31 09:50:57'),
(51, 3, '2025-03-31 09:52:02', '2025-03-31 09:51:50', '2025-03-31 09:52:02'),
(52, 1, '2025-03-31 10:04:21', '2025-03-31 09:52:05', '2025-03-31 10:04:21');

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
(1, 1, 'active', '2025-03-30 10:37:21', '2025-03-31 09:31:19'),
(2, 2, 'inactive', '2025-03-30 11:47:33', '2025-03-31 09:28:59'),
(3, 3, 'inactive', '2025-03-31 09:29:06', '2025-03-31 09:31:16');

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
  ADD KEY `fk_login_logs_credential` (`credential_id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `logging`
--
ALTER TABLE `logging`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login_logs`
--
ALTER TABLE `login_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  ADD CONSTRAINT `fk_login_logs_credential` FOREIGN KEY (`credential_id`) REFERENCES `credentials` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`credential_id`) REFERENCES `credentials` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

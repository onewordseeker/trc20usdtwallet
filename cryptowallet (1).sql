-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 17, 2024 at 03:04 PM
-- Server version: 8.0.34-0ubuntu0.22.04.1
-- PHP Version: 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cryptowallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `title` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='activity_logs';

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 'Partial Funds Transfer', 'Funds transfered by user XYZ from wallet JKL to wallet ABC', '2024-07-18 06:14:07', '2024-07-18 04:14:39'),
(2, 2, 'Login', 'User logged in to the system', '2024-07-18 06:14:07', '2024-07-18 04:14:39'),
(3, 1, 'Wallet Deleted', 'wallet TWLkst2mESZrrMzWsNnhXV8MoF6m2WZYPq deleted by Hamid Raza on 2024 18 Jul 04:18:33', '2024-07-18 04:18:33', '2024-07-18 04:18:33'),
(4, 1, 'Wallet Deleted', 'Wallet TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u deleted by Hamid Raza on 2024 18 Jul 04:30:35', '2024-07-18 04:30:35', '2024-07-18 04:30:35'),
(5, 1, 'Wallet Deleted', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L deleted by Hamid Raza on 2024 18 Jul 04:31:01', '2024-07-18 04:31:01', '2024-07-18 04:31:01'),
(6, 1, 'Wallet updated', 'Wallet TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ updated by Hamid Raza on 2024 18 Jul 04:31:44 Name is updated from 44329 to 44329s', '2024-07-18 04:31:45', '2024-07-18 04:31:45'),
(7, 1, 'Wallet Added', 'New wallet TLuQa8fy85YuJLKi2abdtVLFKnJ2nVzJL2 added by Hamid Raza on 2024 18 Jul 04:34:52', '2024-07-18 04:34:52', '2024-07-18 04:34:52'),
(8, 1, 'Wallet Added', 'New wallet TTrdomqnDF77z1QN6CFKFJ6qDM9RzV7uBJ added by Hamid Raza on 2024 18 Jul 04:35:49', '2024-07-18 04:35:49', '2024-07-18 04:35:49'),
(9, 1, 'User updated', 'User Hamid Raza updated by Hamid Raza on 2024 18 Jul 04:36:18 Previous Data: { fullname: Hamid Raza, email: admin3@cryptowallet.com, permissions: [0,0,0,0,0,0] }', '2024-07-18 04:36:18', '2024-07-18 04:36:18'),
(10, 1, 'User updated', 'User Hamid Khan updated by Hamid Raza on 2024 18 Jul 04:36:49 Previous Data: { fullname: Hamid Khan, email: test@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-18 04:36:49', '2024-07-18 04:36:49'),
(11, 1, 'User updated', 'User TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb updated by Hamid Raza on 2024 18 Jul 04:37:47 Previous Data: { fullname: TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb, email: test2@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] } New Data: { fullname: TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb, email: test2@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-18 04:37:47', '2024-07-18 04:37:47'),
(12, 1, 'User updated', 'User WN7J6ceZoimneNucTsb updated by Hamid Raza on 2024 18 Jul 04:39:30 Previous Data: { fullname: WN7J6ceZoimneNucTsb, email: test3@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] } New Data: { fullname: WN7J6ceZoimneNucTsb, email: test3@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-18 04:39:30', '2024-07-18 04:39:30'),
(13, 1, 'User updated', 'User WN7J6ceZoimneNucTsb updated by Hamid Raza on 2024 18 Jul 04:39:56 Previous Data: { fullname: WN7J6ceZoimneNucTsb, email: test3@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] } New Data: { fullname: WN7J6ceZoimneNucTsb, email: test3@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-18 04:39:56', '2024-07-18 04:39:56'),
(14, 1, 'User updated', 'User WN7J6ceZoimneNucTsb updated by Hamid Raza on 2024 18 Jul 04:42:21 Previous Data: { fullname: WN7J6ceZoimneNucTsb, email: test3@email.com, permissions: [\"1\",\"0\",\"0\",\"0\",\"1\",\"0\"] } New Data: { fullname: WN7J6ceZoimneNucTsb, email: test3@email.com, permissions: [\"1\",\"0\",\"0\",\"0\",\"1\",\"0\"] }', '2024-07-18 04:42:21', '2024-07-18 04:42:21'),
(15, 1, 'User Deleted', 'User WN7J6ceZoimneNucTsb deleted by Hamid Raza on 2024 18 Jul 04:42:43', '2024-07-18 04:42:43', '2024-07-18 04:42:43'),
(16, 1, 'User added', 'New user new user 1 add by Hamid Raza on 2024 18 Jul 04:45:35', '2024-07-18 04:45:35', '2024-07-18 04:45:35'),
(17, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:39 from wallet: TTrdomqnDF77z1QN6CFKFJ6qDM9RzV7uBJ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:39', '2024-07-18 04:48:39'),
(18, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:39 from wallet: TLuQa8fy85YuJLKi2abdtVLFKnJ2nVzJL2 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:39', '2024-07-18 04:48:39'),
(19, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:40 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:40', '2024-07-18 04:48:40'),
(20, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:41 from wallet: TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:41', '2024-07-18 04:48:41'),
(21, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:42 from wallet: TLhJj93UZnJC2WLmcZWpDiYsvi5wCcRXU5 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:42', '2024-07-18 04:48:42'),
(22, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:43 from wallet: TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:43', '2024-07-18 04:48:43'),
(23, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:43 from wallet: TLnheFnf3dsaASBBZZV8QCZ7CgsewL4BNA to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:43', '2024-07-18 04:48:43'),
(24, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:44 from wallet: TXHrKduaNq4ng49YKW178em9aJPYekJxzb to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:44', '2024-07-18 04:48:44'),
(25, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:45 from wallet: TNHwv6xRZSuhTgBzc4fRwaGV5my79Hx9r2 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:45', '2024-07-18 04:48:45'),
(26, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:46 from wallet: TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:46', '2024-07-18 04:48:46'),
(27, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:48:46 from wallet: TFEvRKFyJTYCePFvWWSQno9aXWgZrXyycr to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:48:46', '2024-07-18 04:48:46'),
(28, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:49:16 from wallet: TTrdomqnDF77z1QN6CFKFJ6qDM9RzV7uBJ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:49:16', '2024-07-18 04:49:16'),
(29, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:49:17 from wallet: TLuQa8fy85YuJLKi2abdtVLFKnJ2nVzJL2 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:49:17', '2024-07-18 04:49:17'),
(30, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:51:24 from wallet: TTrdomqnDF77z1QN6CFKFJ6qDM9RzV7uBJ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:51:24', '2024-07-18 04:51:24'),
(31, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:51:25 from wallet: TLuQa8fy85YuJLKi2abdtVLFKnJ2nVzJL2 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:51:25', '2024-07-18 04:51:25'),
(32, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:52:04 from wallet: TLuQa8fy85YuJLKi2abdtVLFKnJ2nVzJL2 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:52:04', '2024-07-18 04:52:04'),
(33, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Raza on 2024 18 Jul 04:52:05 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 04:52:05', '2024-07-18 04:52:05'),
(34, 1, 'User updated', 'User Hamid Khan updated by Hamid Raza on 2024 18 Jul 05:31:29 Previous Data: { fullname: Hamid Khan, email: test@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] } New Data: { fullname: Hamid Khan, email: test@email.com, permissions: [\"1\",\"1\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-18 05:31:29', '2024-07-18 05:31:29'),
(35, 1, 'User updated', 'User Hamid Khan updated by Hamid Raza on 2024 18 Jul 05:46:26 Previous Data: { fullname: Hamid Khan, email: test@email.com, permissions: [\"0\",\"0\",\"1\",\"0\",\"1\",\"0\"] } New Data: { fullname: Hamid Khan, email: test@email.com, permissions: [\"0\",\"0\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-18 05:46:26', '2024-07-18 05:46:26'),
(36, 4, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Hamid Khan on 2024 18 Jul 05:55:31 from wallet: TWLkst2mESZrrMzWsNnhXV8MoF6m2WZYPq to wallet TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo', '2024-07-18 05:55:31', '2024-07-18 05:55:31'),
(37, 4, 'Wallet Deleted', 'Wallet TS9A1hfoZZw7xXxnUSiy19d8YELffz72bA deleted by Hamid Khan on 2024 18 Jul 05:58:18', '2024-07-18 05:58:18', '2024-07-18 05:58:18'),
(38, 4, 'Wallet Deleted', 'Wallet TS9A1hfoZZw7xXxnUSiy19d8YELffz72bA deleted by Hamid Khan on 2024 18 Jul 05:58:26', '2024-07-18 05:58:26', '2024-07-18 05:58:26'),
(39, 4, 'Wallet Deleted', 'Wallet TS9A1hfoZZw7xXxnUSiy19d8YELffz72bA deleted by Hamid Khan on 2024 18 Jul 05:58:54', '2024-07-18 05:58:54', '2024-07-18 05:58:54'),
(40, 4, 'Wallet Deleted', 'Wallet TS9A1hfoZZw7xXxnUSiy19d8YELffz72bA deleted by Hamid Khan on 2024 18 Jul 05:59:03', '2024-07-18 05:59:03', '2024-07-18 05:59:03'),
(41, 4, 'Wallet Deleted', 'Wallet TS9A1hfoZZw7xXxnUSiy19d8YELffz72bA deleted by Hamid Khan on 2024 18 Jul 05:59:33', '2024-07-18 05:59:33', '2024-07-18 05:59:33'),
(42, 4, 'Wallet updated', 'Wallet TS9A1hfoZZw7xXxnUSiy19d8YELffz72bA updated by Hamid Khan on 2024 18 Jul 05:59:41 Name is updated from Test 2 to Test 2', '2024-07-18 05:59:41', '2024-07-18 05:59:41'),
(43, 4, 'Wallet Added', 'New wallet TNo5sW2mpqDNNnbTsYt8K3MeYFN6Zc9YYs added by Hamid Khan on 2024 18 Jul 05:59:44', '2024-07-18 05:59:44', '2024-07-18 05:59:44'),
(44, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 09:02:40 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 09:02:40', '2024-07-18 09:02:40'),
(45, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 09:02:41 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 09:02:41', '2024-07-18 09:02:41'),
(46, 1, 'User added', 'New user finance add by Admin on 2024 18 Jul 09:03:38', '2024-07-18 09:03:38', '2024-07-18 09:03:38'),
(47, 1, 'Wallet Added', 'New  destination  wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb added by Admin on 2024 18 Jul 21:53:23', '2024-07-18 21:53:23', '2024-07-18 21:53:23'),
(48, 1, 'Wallet Deleted', 'Wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb deleted by Admin on 2024 18 Jul 21:53:31', '2024-07-18 21:53:31', '2024-07-18 21:53:31'),
(49, 1, 'Wallet updated', 'Wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb updated by Admin on 2024 18 Jul 21:55:20 Name is updated from Destination wallet 1 to Destination wallet 1', '2024-07-18 21:55:20', '2024-07-18 21:55:20'),
(50, 1, 'Wallet updated', 'Wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb updated by Admin on 2024 18 Jul 21:55:36 Name is updated from Destination wallet 1 to Destination wallet 1', '2024-07-18 21:55:36', '2024-07-18 21:55:36'),
(51, 1, 'Wallet updated', 'Wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsbsssss updated by Admin on 2024 18 Jul 21:57:04 Name is updated from Destination wallet 1 to Destination wallet 1', '2024-07-18 21:57:04', '2024-07-18 21:57:04'),
(52, 1, 'Wallet updated', 'Wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb updated by Admin on 2024 18 Jul 21:57:13 Name is updated from Destination wallet 1 to Destination wallet 1', '2024-07-18 21:57:13', '2024-07-18 21:57:13'),
(53, 1, 'Wallet Added', 'New  managed  wallet TPc8Fm77tyZKKDnj3AtoBS34iVqhTfxM7A added by Admin on 2024 18 Jul 21:59:41', '2024-07-18 21:59:41', '2024-07-18 21:59:41'),
(54, 1, 'Wallet Deleted', 'Wallet TPc8Fm77tyZKKDnj3AtoBS34iVqhTfxM7A deleted by Admin on 2024 18 Jul 21:59:51', '2024-07-18 21:59:51', '2024-07-18 21:59:51'),
(55, 1, 'Wallet Added', 'New  destination  wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb added by Admin on 2024 18 Jul 22:10:20', '2024-07-18 22:10:20', '2024-07-18 22:10:20'),
(56, 1, 'Wallet updated', 'Wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb updated by Admin on 2024 18 Jul 22:11:04 Name is updated from Destination wallet 1 to Destination wallet 1', '2024-07-18 22:11:04', '2024-07-18 22:11:04'),
(57, 1, 'Failed transfer attempt', 'A transfer of 076 funds was attempted by Admin on 2024 18 Jul 22:13:12 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:13:12', '2024-07-18 22:13:12'),
(58, 1, 'Failed transfer attempt', 'A transfer of 076 funds was attempted by Admin on 2024 18 Jul 22:13:13 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:13:13', '2024-07-18 22:13:13'),
(59, 1, 'Failed transfer attempt', 'A transfer of 076 funds was attempted by Admin on 2024 18 Jul 22:13:13 from wallet: TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:13:13', '2024-07-18 22:13:13'),
(60, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:19 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:19', '2024-07-18 22:39:19'),
(61, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:20 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:20', '2024-07-18 22:39:20'),
(62, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:21 from wallet: TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:21', '2024-07-18 22:39:21'),
(63, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:21 from wallet: TLhJj93UZnJC2WLmcZWpDiYsvi5wCcRXU5 to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:21', '2024-07-18 22:39:21'),
(64, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:22 from wallet: TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:22', '2024-07-18 22:39:22'),
(65, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:23 from wallet: TLnheFnf3dsaASBBZZV8QCZ7CgsewL4BNA to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:23', '2024-07-18 22:39:23'),
(66, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:24 from wallet: TXHrKduaNq4ng49YKW178em9aJPYekJxzb to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:24', '2024-07-18 22:39:24'),
(67, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:24 from wallet: TNHwv6xRZSuhTgBzc4fRwaGV5my79Hx9r2 to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:24', '2024-07-18 22:39:24'),
(68, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:25 from wallet: TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:25', '2024-07-18 22:39:25'),
(69, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:39:26 from wallet: TFEvRKFyJTYCePFvWWSQno9aXWgZrXyycr to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:39:26', '2024-07-18 22:39:26'),
(70, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:10 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:10', '2024-07-18 22:43:10'),
(71, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:11 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:11', '2024-07-18 22:43:11'),
(72, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:12 from wallet: TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:12', '2024-07-18 22:43:12'),
(73, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:12 from wallet: TLhJj93UZnJC2WLmcZWpDiYsvi5wCcRXU5 to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:12', '2024-07-18 22:43:12'),
(74, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:13 from wallet: TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:13', '2024-07-18 22:43:13'),
(75, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:14 from wallet: TLnheFnf3dsaASBBZZV8QCZ7CgsewL4BNA to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:14', '2024-07-18 22:43:14'),
(76, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:15 from wallet: TXHrKduaNq4ng49YKW178em9aJPYekJxzb to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:15', '2024-07-18 22:43:15'),
(77, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:15 from wallet: TNHwv6xRZSuhTgBzc4fRwaGV5my79Hx9r2 to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:15', '2024-07-18 22:43:15'),
(78, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:16 from wallet: TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:16', '2024-07-18 22:43:16'),
(79, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 18 Jul 22:43:17 from wallet: TFEvRKFyJTYCePFvWWSQno9aXWgZrXyycr to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-18 22:43:17', '2024-07-18 22:43:17'),
(80, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 22:53:11 Name is updated from 44330 to 44330', '2024-07-18 22:53:11', '2024-07-18 22:53:11'),
(81, 1, 'Wallet updated', 'Wallet TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ updated by Admin on 2024 18 Jul 23:00:24 Name is updated from 44329 to 44329', '2024-07-18 23:00:24', '2024-07-18 23:00:24'),
(82, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 23:01:42 Name is updated from 44330 to 44330', '2024-07-18 23:01:42', '2024-07-18 23:01:42'),
(83, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 23:02:06 Name is updated from 44330 to 44330', '2024-07-18 23:02:06', '2024-07-18 23:02:06'),
(84, 1, 'Wallet updated', 'Wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb updated by Admin on 2024 18 Jul 23:03:15 Name is updated from New Wallet to New Wallet', '2024-07-18 23:03:15', '2024-07-18 23:03:15'),
(85, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 23:03:50 Name is updated from 44330 to 44330', '2024-07-18 23:03:50', '2024-07-18 23:03:50'),
(86, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 23:07:24 Name is updated from 44330 to 44330', '2024-07-18 23:07:24', '2024-07-18 23:07:24'),
(87, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 23:09:12 Name is updated from 44330 to 44330', '2024-07-18 23:09:12', '2024-07-18 23:09:12'),
(88, 1, 'Wallet updated', 'Wallet TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L updated by Admin on 2024 18 Jul 23:10:55 Name is updated from 44330 to 44330', '2024-07-18 23:10:55', '2024-07-18 23:10:55'),
(89, 1, 'Wallet updated', 'Wallet TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp updated by Admin on 2024 18 Jul 23:11:52 Name is updated from 44326 to 44326', '2024-07-18 23:11:52', '2024-07-18 23:11:52'),
(90, 1, 'Wallet updated', 'Wallet TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm updated by Admin on 2024 18 Jul 23:16:50 Name is updated from 44328 to 44328', '2024-07-18 23:16:50', '2024-07-18 23:16:50'),
(91, 1, 'Wallet updated', 'Wallet TLhJj93UZnJC2WLmcZWpDiYsvi5wCcRXU5 updated by Admin on 2024 18 Jul 23:16:55 Name is updated from 44327 to 44327', '2024-07-18 23:16:55', '2024-07-18 23:16:55'),
(92, 1, 'Wallet updated', 'Wallet TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp updated by Admin on 2024 18 Jul 23:16:59 Name is updated from 44326 to 44326', '2024-07-18 23:16:59', '2024-07-18 23:16:59'),
(93, 1, 'Wallet updated', 'Wallet TLnheFnf3dsaASBBZZV8QCZ7CgsewL4BNA updated by Admin on 2024 18 Jul 23:17:04 Name is updated from 44325 to 44325', '2024-07-18 23:17:04', '2024-07-18 23:17:04'),
(94, 1, 'Wallet updated', 'Wallet TXHrKduaNq4ng49YKW178em9aJPYekJxzb updated by Admin on 2024 18 Jul 23:17:10 Name is updated from 44324 to 44324', '2024-07-18 23:17:10', '2024-07-18 23:17:10'),
(95, 1, 'Wallet updated', 'Wallet TNHwv6xRZSuhTgBzc4fRwaGV5my79Hx9r2 updated by Admin on 2024 18 Jul 23:17:16 Name is updated from 44323 to 44323', '2024-07-18 23:17:16', '2024-07-18 23:17:16'),
(96, 1, 'Wallet updated', 'Wallet TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo updated by Admin on 2024 18 Jul 23:17:22 Name is updated from 44322 to 44322', '2024-07-18 23:17:22', '2024-07-18 23:17:22'),
(97, 1, 'Wallet updated', 'Wallet TFEvRKFyJTYCePFvWWSQno9aXWgZrXyycr updated by Admin on 2024 18 Jul 23:17:27 Name is updated from 44321 to 44321', '2024-07-18 23:17:27', '2024-07-18 23:17:27'),
(98, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:35:03 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:35:03', '2024-07-19 13:35:03'),
(99, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:36:04 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:36:04', '2024-07-19 13:36:04'),
(100, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:36:54 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:36:54', '2024-07-19 13:36:54'),
(101, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:37:23 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:37:23', '2024-07-19 13:37:23'),
(102, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:38:31 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:38:31', '2024-07-19 13:38:31'),
(103, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:39:05 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:39:05', '2024-07-19 13:39:05'),
(104, 1, 'Failed transfer attempt', 'A transfer of 10 funds was attempted by Admin on 2024 19 Jul 13:39:37 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 13:39:37', '2024-07-19 13:39:37'),
(105, 1, 'Failed transfer attempt', 'A transfer of 4 funds was attempted by Admin on 2024 19 Jul 20:45:29 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 20:45:29', '2024-07-19 20:45:29'),
(106, 1, 'Failed transfer attempt', 'A transfer of 20 funds was attempted by Admin on 2024 19 Jul 20:58:11 from wallet: TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-19 20:58:11', '2024-07-19 20:58:11'),
(107, 9, 'Wallet Added', 'New  destination  wallet 123 added by finance on 2024 20 Jul 08:03:30', '2024-07-20 08:03:30', '2024-07-20 08:03:30'),
(108, 9, 'Wallet Deleted', 'Wallet 123 deleted by finance on 2024 20 Jul 08:03:38', '2024-07-20 08:03:38', '2024-07-20 08:03:38'),
(109, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:42 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:42', '2024-07-20 22:25:42'),
(110, 1, 'Failed transfer attempt', 'A transfer of 100.000000 funds was attempted by Admin on 2024 20 Jul 22:25:43 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:43', '2024-07-20 22:25:43'),
(111, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:43 from wallet: TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:43', '2024-07-20 22:25:43'),
(112, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:44 from wallet: TLhJj93UZnJC2WLmcZWpDiYsvi5wCcRXU5 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:44', '2024-07-20 22:25:44'),
(113, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:45 from wallet: TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:45', '2024-07-20 22:25:45'),
(114, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:45 from wallet: TLnheFnf3dsaASBBZZV8QCZ7CgsewL4BNA to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:45', '2024-07-20 22:25:45'),
(115, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:46 from wallet: TXHrKduaNq4ng49YKW178em9aJPYekJxzb to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:46', '2024-07-20 22:25:46'),
(116, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:47 from wallet: TNHwv6xRZSuhTgBzc4fRwaGV5my79Hx9r2 to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:47', '2024-07-20 22:25:47'),
(117, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:47 from wallet: TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:47', '2024-07-20 22:25:47'),
(118, 1, 'Failed transfer attempt', 'A transfer of 0.000000 funds was attempted by Admin on 2024 20 Jul 22:25:48 from wallet: TFEvRKFyJTYCePFvWWSQno9aXWgZrXyycr to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 22:25:48', '2024-07-20 22:25:48'),
(119, 1, 'Failed transfer attempt', 'A transfer of 1 funds was attempted by Admin on 2024 20 Jul 23:38:12 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 23:38:12', '2024-07-20 23:38:12'),
(120, 1, 'Failed transfer attempt', 'A transfer of 1 funds was attempted by Admin on 2024 20 Jul 23:38:55 from wallet: TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L to wallet TRwZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-20 23:38:55', '2024-07-20 23:38:55'),
(121, 1, 'User updated', 'User finance updated by Admin on 2024 21 Jul 13:50:54 Previous Data: { fullname: finance, email: finance@tronmanager.com, permissions: [\"0\",\"1\",\"1\",\"0\",\"1\",\"0\"] } New Data: { fullname: finance, email: finance@tronmanager.com, permissions: [\"0\",\"1\",\"1\",\"0\",\"1\",\"0\"] }', '2024-07-21 13:50:54', '2024-07-21 13:50:54'),
(122, 1, 'Wallet Added', 'New  destination  wallet TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo added by Admin on 2024 22 Jul 09:44:48', '2024-07-22 09:44:48', '2024-07-22 09:44:48'),
(123, 1, 'Failed transfer attempt', 'A transfer of 5 funds was attempted by Admin on 2024 22 Jul 10:13:28 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-22 10:13:28', '2024-07-22 10:13:28'),
(124, 1, 'Failed transfer attempt', 'A transfer of 5 funds was attempted by Admin on 2024 22 Jul 10:14:47 from wallet: TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ to wallet TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', '2024-07-22 10:14:47', '2024-07-22 10:14:47');

-- --------------------------------------------------------

--
-- Table structure for table `admin_wallets`
--

CREATE TABLE `admin_wallets` (
  `id` int NOT NULL,
  `wallet_address` text COLLATE utf8mb4_general_ci,
  `private_key` text COLLATE utf8mb4_general_ci,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='admin_wallet';

--
-- Dumping data for table `admin_wallets`
--

INSERT INTO `admin_wallets` (`id`, `wallet_address`, `private_key`, `created_at`, `updated_at`) VALUES
(1, 'TC9haHw5UqZ51hLtCLW7EHye3ddjKJHE4u', 'eyJpdiI6IkRHRjhGNW9TYnFMQ05jWXNHMXh6QlE9PSIsInZhbHVlIjoiNjBnK3hJcWNoa203eDVDejgyWTE1Z3hiZlh2QlMwM2UxNEdZSEIzNlE4Q0pYT1FOaXE1VGIrSkJTNUMyeHdXa0FQQmhSVkhXUUNoWmlqMk1SRDQ2M1l5Z1daVnBINWM2bmhYNFFqdXpzZDQ9IiwibWFjIjoiYjQ0NTFjNWM3NTJmYjU3NmYyMDg0NjU4MzhhYjk1MWMyZDA1YjI4YmEzMTQ5OTZhOGNhZDE3MzdmZTcxYzRiYyIsInRhZyI6IiJ9', '2024-07-19 11:54:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'API Token', 'fa2b868b2f49b142a87630fc1938b174d469a0d93c0640d6f9818a3fb60c133e', '[\"*\"]', NULL, NULL, '2024-07-15 22:47:20', '2024-07-15 22:47:20'),
(2, 'App\\Models\\User', 1, 'API Token', '8b45026d488b7cba2069e8472b5caa911dd699feac39677a3eef36038a1aa7e1', '[\"*\"]', NULL, NULL, '2024-07-15 22:50:53', '2024-07-15 22:50:53'),
(3, 'App\\Models\\User', 1, 'API Token', '1664861968c201251e437c9dbc5813d37c7ebd49825e075111b86282d06e4289', '[\"*\"]', NULL, NULL, '2024-07-15 22:55:14', '2024-07-15 22:55:14'),
(4, 'App\\Models\\User', 1, 'API Token', '96ac1fc56dc11aca09e66a15c1097ca409faa2c597c88750bb690ebd51c7e81c', '[\"*\"]', NULL, NULL, '2024-07-16 20:49:32', '2024-07-16 20:49:32'),
(5, 'App\\Models\\User', 1, 'API Token', 'cadb8ecb2785fb239303c861118dc2f6a93ef636eda6b2fc46e7135323d80c87', '[\"*\"]', NULL, NULL, '2024-07-16 21:04:49', '2024-07-16 21:04:49'),
(6, 'App\\Models\\User', 1, 'API Token', '30f0e8396d11f011d8777435327691aca9a92a22f06e2a66ee82d26077d652b2', '[\"*\"]', '2024-07-16 21:21:01', NULL, '2024-07-16 21:13:56', '2024-07-16 21:21:01'),
(7, 'App\\Models\\User', 1, 'API Token', '6659bcff1cf43f90f1cd011841cc744f668a05b499cbbb9a1202eaa7c664f74c', '[\"*\"]', NULL, NULL, '2024-07-16 22:19:53', '2024-07-16 22:19:53'),
(8, 'App\\Models\\User', 1, 'API Token', 'f41037867d3f621c60c5ceefbed388cc203cf4c4ebdd597c730d092ba1e83ab4', '[\"*\"]', '2024-07-18 04:08:58', NULL, '2024-07-16 22:20:47', '2024-07-18 04:08:58'),
(9, 'App\\Models\\User', 1, 'API Token', '69d56af413e9f24d039a024614947980ad6b8e66822c5dbe9c51c7687931197e', '[\"*\"]', NULL, NULL, '2024-07-16 22:34:06', '2024-07-16 22:34:06'),
(10, 'App\\Models\\User', 1, 'API Token', '0f38886a677aa5b94617a1b2db694b60a2e560f4e215e79fa8b7e80811238e81', '[\"*\"]', '2024-07-17 19:14:27', NULL, '2024-07-16 23:12:41', '2024-07-17 19:14:27'),
(11, 'App\\Models\\User', 1, 'API Token', '1678853854286a11f398ad0c354936f6b7981c5f847340affea41a57898967e9', '[\"*\"]', '2024-07-19 17:34:39', NULL, '2024-07-17 19:28:21', '2024-07-19 17:34:39'),
(12, 'App\\Models\\User', 4, 'API Token', '4cfc7a9a219dc4f5aa59f9f3a668b9164e356d280929655737c83147f7bee59c', '[\"*\"]', '2024-07-18 06:13:54', NULL, '2024-07-18 05:31:44', '2024-07-18 06:13:54'),
(13, 'App\\Models\\User', 4, 'API Token', '9b342b50231ccf25cc344b51554a70c3a6bb9bcfa2d0458dd7e14824c5d9398d', '[\"*\"]', '2024-07-18 06:00:55', NULL, '2024-07-18 05:50:51', '2024-07-18 06:00:55'),
(14, 'App\\Models\\User', 1, 'API Token', 'd04bc3b8488261c93e5070744a347905a202fd24315cfa35075b7c42db081708', '[\"*\"]', '2024-07-18 06:31:06', NULL, '2024-07-18 06:18:38', '2024-07-18 06:31:06'),
(15, 'App\\Models\\User', 1, 'API Token', 'cc570a57cf360c4f64f316dcf6fe9eb2df8b0194a2a5d3394f13d88df0ba6142', '[\"*\"]', '2024-07-18 06:48:19', NULL, '2024-07-18 06:24:18', '2024-07-18 06:48:19'),
(16, 'App\\Models\\User', 1, 'API Token', '2d109cf32c9bd39c689a37b37db38e1b0f29662df366e363997470840dbef1c7', '[\"*\"]', NULL, NULL, '2024-07-18 06:24:55', '2024-07-18 06:24:55'),
(17, 'App\\Models\\User', 4, 'API Token', '960940200d2a9635492d6e8fbf5101202bf39fb6c3675fbbdb45ddf9d8ae7475', '[\"*\"]', '2024-07-18 06:41:25', NULL, '2024-07-18 06:32:14', '2024-07-18 06:41:25'),
(18, 'App\\Models\\User', 4, 'API Token', 'fbcf235cba8a0a49dd1426f77d42aa7943615ec8625767d1c268bd5fb2049de5', '[\"*\"]', '2024-07-18 06:44:19', NULL, '2024-07-18 06:44:18', '2024-07-18 06:44:19'),
(19, 'App\\Models\\User', 1, 'API Token', '4ddadacfc997dc34c5d2420f7a9b1d5799edf139e203d35d0e1dd83bdbd3096e', '[\"*\"]', '2024-07-18 07:24:56', NULL, '2024-07-18 07:17:43', '2024-07-18 07:24:56'),
(20, 'App\\Models\\User', 1, 'API Token', '0b418abb869a040ae28c8b2975f9699b565a430eef4f02680f0cad65ef625aa3', '[\"*\"]', '2024-09-09 15:21:30', NULL, '2024-07-18 07:25:04', '2024-09-09 15:21:30'),
(21, 'App\\Models\\User', 1, 'API Token', 'a25f30bc074093a96294a835b2c41757bde7b37d83172546df5f631a78402564', '[\"*\"]', '2024-07-18 09:25:54', NULL, '2024-07-18 09:01:45', '2024-07-18 09:25:54'),
(22, 'App\\Models\\User', 9, 'API Token', '3bf3df0754ea9e724412594912ce1b4927961a02fc8aaa7d88aad97bd4fc1de3', '[\"*\"]', '2024-09-09 21:36:42', NULL, '2024-07-18 09:26:03', '2024-09-09 21:36:42'),
(23, 'App\\Models\\User', 1, 'API Token', 'bded7ed9b7817a09776e576c75cf5adcefe14d544198d34d1f619099e7fa9ee6', '[\"*\"]', '2024-07-19 17:50:29', NULL, '2024-07-19 17:43:01', '2024-07-19 17:50:29'),
(24, 'App\\Models\\User', 1, 'API Token', 'd08038eaf1c1df0cd33a196495be070a5fdbfa456487e99b402d43a90113ea0a', '[\"*\"]', '2024-07-19 18:49:18', NULL, '2024-07-19 17:50:45', '2024-07-19 18:49:18'),
(25, 'App\\Models\\User', 1, 'API Token', 'a5dd293da11bc6c16813d82213c1bf21740de422c97df915c25cbc1e981a7328', '[\"*\"]', '2024-07-19 19:19:36', NULL, '2024-07-19 19:19:36', '2024-07-19 19:19:36'),
(26, 'App\\Models\\User', 1, 'API Token', 'f0b5a9f4f49677d37054725eceb4c6fccc251f0e685e2208e01adbbcc1a0440c', '[\"*\"]', '2024-07-19 20:15:17', NULL, '2024-07-19 20:15:16', '2024-07-19 20:15:17'),
(27, 'App\\Models\\User', 1, 'API Token', '16f78353ef52af7fa4b9143f2906eac65cd89c9ea7e763c9f20139d9c5e1526b', '[\"*\"]', NULL, NULL, '2024-07-19 20:30:46', '2024-07-19 20:30:46'),
(28, 'App\\Models\\User', 1, 'API Token', 'd61dbaf3a0a76acc8f9c0fadb5b7279d32109476edc3eb68c9841125f1fc5733', '[\"*\"]', NULL, NULL, '2024-07-19 20:30:50', '2024-07-19 20:30:50'),
(29, 'App\\Models\\User', 1, 'API Token', 'd4663c4a47d9d83eba6b0143ed2b5a67bbf31a9c0f0fe976b347add9468acd35', '[\"*\"]', NULL, NULL, '2024-07-19 20:31:10', '2024-07-19 20:31:10'),
(30, 'App\\Models\\User', 1, 'API Token', 'e6e1e66711f37a411aa1a2f5e219de7edd6db9019025ba2a385287714d374c41', '[\"*\"]', '2024-07-19 20:32:41', NULL, '2024-07-19 20:32:40', '2024-07-19 20:32:41'),
(31, 'App\\Models\\User', 1, 'API Token', '5cc2cdf518ce9138019c24ebf6e90ee430aa06f7fbff9e5d01f5f0ff3f0afce0', '[\"*\"]', '2024-07-19 20:33:26', NULL, '2024-07-19 20:33:07', '2024-07-19 20:33:26'),
(32, 'App\\Models\\User', 1, 'API Token', '7e4ff86555846f284a99167b3695804a41b582f73e3ed1a27ba26c79667c2e28', '[\"*\"]', '2024-07-21 21:32:14', NULL, '2024-07-19 20:33:37', '2024-07-21 21:32:14'),
(33, 'App\\Models\\User', 1, 'API Token', 'f90c0cbd8109a0f618e6e1902dbc4f6e2004db055f9fedcdb38cd1cc2fbadf57', '[\"*\"]', '2024-07-21 13:50:54', NULL, '2024-07-20 10:14:36', '2024-07-21 13:50:54'),
(34, 'App\\Models\\User', 1, 'API Token', 'bbdccffa2df6d4febf2c1cb53b4c661b7469758757f55bcdcf53099948afc924', '[\"*\"]', '2024-07-20 23:38:12', NULL, '2024-07-20 22:56:22', '2024-07-20 23:38:12'),
(35, 'App\\Models\\User', 1, 'API Token', 'b1cb59c7466659fb6bb60806fb90b72a681cbc32a21efe2dc007a4d47c7bc797', '[\"*\"]', '2024-07-22 11:53:25', NULL, '2024-07-20 23:43:06', '2024-07-22 11:53:25'),
(36, 'App\\Models\\User', 1, 'API Token', '491384926bdbea602940099b501f4eb108262f8a6071882f9141856c16c8e172', '[\"*\"]', '2024-07-21 00:16:24', NULL, '2024-07-20 23:56:11', '2024-07-21 00:16:24'),
(37, 'App\\Models\\User', 9, 'API Token', 'db073d3e3078b79c390ca95e72e362b80b3f59810f728bd56fa1ecbfd5daba65', '[\"*\"]', '2024-07-21 13:51:48', NULL, '2024-07-21 13:51:20', '2024-07-21 13:51:48'),
(38, 'App\\Models\\User', 1, 'API Token', '9bcca5d54dea9b8c07dd4b1d0ef6b71832ff964e5f49779dbc07a7c15ac68348', '[\"*\"]', '2024-08-08 18:29:53', NULL, '2024-07-21 13:51:59', '2024-08-08 18:29:53'),
(39, 'App\\Models\\User', 1, 'API Token', 'dadcc50741ad64f12603a9aa83919b748bc3a6d229e82d642931436ddef4e2ec', '[\"*\"]', '2024-07-22 08:36:19', NULL, '2024-07-21 21:07:44', '2024-07-22 08:36:19'),
(40, 'App\\Models\\User', 1, 'API Token', '04e8e412235640c997aca8343fda9c615aac966ce42ce8f7fb13626db6f69bfb', '[\"*\"]', '2024-07-22 19:45:42', NULL, '2024-07-22 10:12:41', '2024-07-22 19:45:42'),
(41, 'App\\Models\\User', 1, 'API Token', '06bccd529386dd9faa84137efd1356ca96e4039e477535bcac4a293d2287f3fc', '[\"*\"]', '2024-07-29 19:42:16', NULL, '2024-07-27 10:25:24', '2024-07-29 19:42:16');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `hash` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `amount` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `to_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `from_address` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'pending',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `fullname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mnemonics` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `permissions` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT '[1,1,1,1,1]',
  `otp_secret` text COLLATE utf8mb4_unicode_ci,
  `active` int NOT NULL DEFAULT '1',
  `is_admin` int NOT NULL DEFAULT '0',
  `withdrawal_wallet` text COLLATE utf8mb4_unicode_ci,
  `referral_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `fullname`, `mnemonics`, `permissions`, `otp_secret`, `active`, `is_admin`, `withdrawal_wallet`, `referral_code`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin@cryptowallet.com', '$2y$10$kr4j8RxLNe4.ngLhNdHAy.NZ0dvAZhv./fFW9iXMRg9fPP0toU1ei', 'Admin', 'avoid that treat jeans aspect wrong orange topic escape color rocket faint', '[1,1,1,1,1,1]', NULL, 1, 1, '', NULL, NULL, '2023-11-06 04:44:54', '2024-07-19 20:58:36'),
(9, 'finance@tronmanager.com', '$2y$10$S6j1SvPbzfe3pfqkQuK0E.UNr8fWKXwbrMQUnTic87c4JFyzL4V12', 'finance', NULL, '[\"0\",\"1\",\"1\",\"0\",\"1\",\"0\"]', NULL, 1, 0, NULL, NULL, NULL, '2024-07-18 09:03:38', '2024-07-21 13:50:54');

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` int NOT NULL,
  `mnemonics` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `wallet_name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `wallet_address` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `private_key` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `supply_wallet` int NOT NULL DEFAULT '0',
  `chain` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `last_balance` varchar(100) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `trx_balance` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `user_id` int NOT NULL,
  `active` int NOT NULL DEFAULT '1',
  `partner` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wallets`
--

INSERT INTO `wallets` (`id`, `mnemonics`, `wallet_name`, `wallet_address`, `private_key`, `supply_wallet`, `chain`, `last_balance`, `trx_balance`, `user_id`, `active`, `partner`, `created_at`, `updated_at`) VALUES
(2, NULL, '44321', 'TFEvRKFyJTYCePFvWWSQno9aXWgZrXyycr', 'eyJpdiI6IkRHRjhGNW9TYnFMQ05jWXNHMXh6QlE9PSIsInZhbHVlIjoiNjBnK3hJcWNoa203eDVDejgyWTE1Z3hiZlh2QlMwM2UxNEdZSEIzNlE4Q0pYT1FOaXE1VGIrSkJTNUMyeHdXa0FQQmhSVkhXUUNoWmlqMk1SRDQ2M1l5Z1daVnBINWM2bmhYNFFqdXpzZDQ9IiwibWFjIjoiYjQ0NTFjNWM3NTJmYjU3NmYyMDg0NjU4MzhhYjk1MWMyZDA1YjI4YmEzMTQ5OTZhOGNhZDE3MzdmZTcxYzRiYyIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:52:04', '2024-07-18 23:17:27'),
(3, NULL, '44322', 'TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo', 'eyJpdiI6IlZQcXdiZTY4Qm9uN1ZDbGRHL0s4Zmc9PSIsInZhbHVlIjoiaVNZVlZXTWpBQ0U3QWYzbEVKbVQ2UjBMMjk0VnFpSGVDMkplK203cXh2a3laYkVyeFV6dVl5RnBDTjVkNjBFcUFmTnlBZkVmdHkzSy9IdktRa1FoT01iNHkzZzUyOUpQZ05rUE50N1pEcWc9IiwibWFjIjoiNGU0ZTczOTNkMjcwZDgwNTZlMjYwNzZhMzZiYWJlNWU1MWIyMGIxNTY1MzI0ZWNlYmZkNWI2OGQ2M2M1MmMzOSIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:52:55', '2024-07-18 23:17:22'),
(4, NULL, '44323', 'TNHwv6xRZSuhTgBzc4fRwaGV5my79Hx9r2', 'eyJpdiI6IlFkd3ZxZGxLbHRZRk1pUGJUb0Jrb3c9PSIsInZhbHVlIjoidklVNWtQUlkyaUZrT2Q5MXRsdXFTTkQzdEJsM3I1OTJObkU2a001ZnpmN1M5K2Y2d20vR0sySmdBSDNTanNmODFkdTRnWWJEZFcxdFNrR3lmQUJrOEJ3S2VMS0F1ZmRwc0o2RWt1ZXdPemc9IiwibWFjIjoiMWRhZTAyOTMyMzMyODk5MGQ0MzVhMjI4Y2U3NmY3NGRlYWMyY2M3Y2E2NjRhMTE1ZTA2Mzg5ZjJlYTUwZTFlMCIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:53:41', '2024-07-18 23:17:16'),
(5, NULL, '44324', 'TXHrKduaNq4ng49YKW178em9aJPYekJxzb', 'eyJpdiI6IkZjRGYzYWFEOWRtL0NBazVKQjhjMnc9PSIsInZhbHVlIjoidlhoMmJ3dDJQM0hXT0VVaCt6ZUJVVWRIK2NGL0tybTc0WFE5N0NBRzRZQWQ1cStjTUtvN0xud1BqcG9jL3RkeSs5eFdVOEpqY3I3bFloeDcrZTRSSGdYRUc1ZFl5MXVlRzlPSzR0a2VFcTg9IiwibWFjIjoiNzdiOTU5MjMyNDk1NzdhODczMWMxOWIzZDk3MzJiZDg5NDA1MDMxNmI3YWYyOTkyZjU2YzNkYjI1MmFiYzEzOCIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:54:26', '2024-07-18 23:17:10'),
(6, NULL, '44325', 'TLnheFnf3dsaASBBZZV8QCZ7CgsewL4BNA', 'eyJpdiI6Ikg1emhEVUZ3Z1BsZDNKVVlOTTF5SWc9PSIsInZhbHVlIjoic3JnT1JSS3Q1VmlzV0pwZ2tLVmhIYnpabEJGNG8wR1k1b3NKR29yT1pzUm9nZFZnbjlVUmgvSUlBTnN0djZWYTIzNGlIbkwwclNVdmt2ZWczaUZkclBZekVhNFk0WENuekNSV2J4Y29LNEU9IiwibWFjIjoiMzQzZWE0ZTQ4ZDA1NzZiMjIwZWMyZTljNzRlOGIyNTBmZjIzYzYyNTE2ZTNiZGI0MWE4M2RkNTRhYjc2MTNhYiIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:55:51', '2024-07-18 23:17:04'),
(7, NULL, '44326', 'TJnH1bdVNKnnGYvvxvTFBQqdpbVLjg7wmp', 'eyJpdiI6ImtyK0FteUhIL1A1K3ZDZkNRanhrK2c9PSIsInZhbHVlIjoiMFA2ZUZXSHorelRGdEE2QVpoWU9uVUF3OGFOelh4Y3BUZnNUckorODJqVHN4eG5WcmxHUVpyN3ZEQ0xoeHFyWUd2YW02dTlIUGlIbXJET0JiOWpEczByTXZnYzN6b3RYV2wyK3FlbmQrcUk9IiwibWFjIjoiZTliOGEwNmQyY2VmM2MzNzFlNzI2MzI1ZjYyNDNkODI3Mjg0NDY5MWM3MTg0NDc2ZDgzNjkyYWZmOGM3YTc2NiIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:54:58', '2024-07-18 23:16:59'),
(9, NULL, '44327', 'TLhJj93UZnJC2WLmcZWpDiYsvi5wCcRXU5', 'eyJpdiI6ImtEQnRkLzJMMkwrMU51YU1KZGdUUnc9PSIsInZhbHVlIjoidlVGSzZoMFJPWkY0c1Y2WTJSZzJHYzdCZkJjOHQxbldvMUZON3FqQzEvY0NDTGJUUWNhVUsxSGhMcU5ScHVUeVNNK2dZdldHN1RMTDBUUmtKK2Ywa1pIRzlLd1JBUzJpT2lBNVM1dmxXSG89IiwibWFjIjoiNzAxYWU1MjJkMjU1MmRkMDVkMzlhMWJjMjUwY2FlZWJkYjMwYjhjZDFhOWRmZDAwYTI0MjMwYmQzZTZkMTA0ZiIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:57:20', '2024-07-18 23:16:55'),
(10, NULL, '44328', 'TKBuLP7g7WNcRT8h3TDtZirwb9XTgs9cRm', 'eyJpdiI6IkRVVEtEWDFPM2liTDNTKzhGeDRQWEE9PSIsInZhbHVlIjoiRkR6Zk5sS1dkWDhTbkIzdDFTVU9hYm91YXljWVRpemEvanBDQUplVlpHZU9UU1lORjJrSU8zOEg1MjdsazlGY3U0SmdEWXZZL01hOXZjdElmNnQvRUUycnRVUkZGNjYvUjl2Q2szZWYvbUE9IiwibWFjIjoiMTBmYmU1OTU3MTNjOTI1YTA2YjZjNThkNDkxZTQ2MTBjZTcwODAwNTc3NmM4NjIwN2ExYWNmNWM5OGY3OGZhYyIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:57:37', '2024-07-18 23:16:50'),
(11, NULL, '44329', 'TCHh3z2nDsBsj2cWJbAvWpPHvZ8XBbcafQ', 'eyJpdiI6IjkvOUpoVjhWT3QySlVPYTFUTmRraEE9PSIsInZhbHVlIjoiZVZmQTVKMW9YMi8zQVFRK3E2OUpqSGNEWm9VZmNlTURlakVvS3RRMmNNaitsU1FKTXVocFFXSXB6Z25CRmFUM0x1V3pqYmVNVnY0R0k4WENaMC8xeG5KN3FrR2JobHlNMGlHUlZnalgzQ2c9IiwibWFjIjoiZTI0ZDJmNzZjYWUyYjQwMGY4MmViMzA3NDBjYmJmMzBjNDM4YmI2ZTUzNjUwMjJiNDM1YjQxZWM5OGNlNjljNCIsInRhZyI6IiJ9', 1, NULL, '100.000000', '0', 1, 1, 'RC', '2024-07-16 21:57:52', '2024-07-20 22:25:42'),
(12, NULL, '44330', 'TU22k5p8dWvhZxs9XDRFCdHvghLBwL872L', 'eyJpdiI6IkNPOE81NnBna3ZiZlA3aEtPVjQ1U1E9PSIsInZhbHVlIjoibk9UWVVsL0tzeWlnRjZMUGVPZU1xV05qZTdCMGMzUFhOU1ljVFFHOFR3K2hJaHNZUVNwckZzZWFxeWtLRzlMVWZxamdINmRNaDZMVkVVZWpPNmtrODRySlA4MWZwdnZmRENmMk9rTEVmN3c9IiwibWFjIjoiZDdjNjA4MWY1ODQ0YTg0Njc0YjJmMjY1NDk0ZTQ0MTQyOGY0ZjkwZjVjMDg2ZDY3ODcwNWZlMGQ0YTYyMTgyZSIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 1, 'RC', '2024-07-16 21:58:08', '2024-07-18 22:53:11'),
(26, NULL, 'Destination wallet 1', 'TRpZ1F9D9LX7r4FWN7J6ceZoimneNucTsb', NULL, 0, NULL, '0.000000', '115.353019', 1, 1, NULL, '2024-07-18 21:52:47', '2024-07-20 22:51:00'),
(28, NULL, 'Add Managed Wallet 1', 'TPc8Fm77tyZKKDnj3AtoBS34iVqhTfxM7A', 'eyJpdiI6InEzUkh3RnJxWjhLSGFETTJ1a2R4SHc9PSIsInZhbHVlIjoiQlpqbVlXNW82YURXS2VYUzYxWk14SHN2T0RGRit6N0JIRGVhRXN6TzMwTUJma2gvN2RkTlZ0SDBzQjJrdVFUcnlxOXhZeUltNkZjRnF4WGNwUmxPQUZocDZxMjUxWldqeWxCam9GUHlrMFU9IiwibWFjIjoiODkzOTkzMTc4MzgwOWQwOTQwZTRiOTNlODNhOTIzMzFmZjE4MzA3NjJjZmUzY2M2OTFmYWIyYjNlYWFiZGYzOCIsInRhZyI6IiJ9', 1, NULL, '0.000000', '0', 1, 0, NULL, '2024-07-18 21:59:41', '2024-07-20 22:51:05'),
(31, NULL, 'Test1', 'TDB6o8cq4NXm4ETGW8xER1BFfYj5uVPQfo', NULL, 0, NULL, '0', '0', 1, 1, NULL, '2024-07-22 09:44:48', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin_wallets`
--
ALTER TABLE `admin_wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=125;

--
-- AUTO_INCREMENT for table `admin_wallets`
--
ALTER TABLE `admin_wallets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

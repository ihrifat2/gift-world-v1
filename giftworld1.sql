-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2017 at 06:12 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `giftworld1`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lasttName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_confirm` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2017_04_06_060148_create_customers_table', 1),
('2017_04_15_155144_create_sales_silvers_table', 1),
('2017_04_15_160508_create_sales_golds_table', 1),
('2017_04_15_161104_create_sales_platinums_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales_gold`
--

CREATE TABLE `sales_gold` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sales_gold`
--

INSERT INTO `sales_gold` (`id`, `email`, `mobile`, `address`, `created_at`, `updated_at`) VALUES
(1, 'imranhadid@gmail.com', '016654321', 'khulna', '2017-04-17 01:30:28', '2017-04-17 01:30:28');

-- --------------------------------------------------------

--
-- Table structure for table `sales_platinum`
--

CREATE TABLE `sales_platinum` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sales_platinum`
--

INSERT INTO `sales_platinum` (`id`, `email`, `mobile`, `address`, `created_at`, `updated_at`) VALUES
(1, 'imranhadid@gmail.com', '01789654321', 'Dhaka', '2017-04-17 01:30:12', '2017-04-17 01:30:12');

-- --------------------------------------------------------

--
-- Table structure for table `sales_silver`
--

CREATE TABLE `sales_silver` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sales_silver`
--

INSERT INTO `sales_silver` (`id`, `email`, `mobile`, `address`, `created_at`, `updated_at`) VALUES
(1, 'imranhadid@gmail.com', '016123456', 'Mymensigh', '2017-04-17 01:29:46', '2017-04-17 01:29:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lasttName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lasttName`, `email`, `password`, `location`, `mobile`, `gender`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'imran', 'hadid', 'imranhadid@gmail.com', '$2y$10$rStsJkqbCDtTxOSpg0iVu.x5eptmWNct9AGF7UOlDKXXGkUhdkbgq', 'Arambag', '111111111', 'Male', '6hFp0mhmZNEOYBW2jfqZg7vZuc2X307uoRgsudmc76mlpdxUQFeBfFFndzJc', '2017-04-17 01:27:32', '2017-04-25 10:32:48'),
(2, 'who are', 'u?', 'who.r.u@gamil.com', '$2y$10$cgog./8n.acu.pXN7.KfHuecHK/hLXekjOX4Hic9ybaUo34JthLbS', 'Dhanmondi', '684590055', 'Male', NULL, '2017-04-17 03:56:47', '2017-04-17 03:56:47'),
(3, '<img src=x onerror=prompt(1337)>', '<img src=x onerror=prompt(31337)>', 'i@h.com', '$2y$10$y0yalXk9.AGVaRPuKXo.bOCLBYCiqSfarfag2BG5n/Oh3nW6plfGC', 'Arambag', '124325364', 'Male', 'FbVpIThcKvaCSsYl8AqEQ0XYkIw81BJ9aZezm6td20BZlqEf8HwRgbFwsEsn', '2017-04-17 04:21:57', '2017-04-17 04:28:46'),
(4, 'durjoy ', 'bhuiyan', 'durjoy@gmail.com', '$2y$10$dI9N96kSPHUn0V9yVgNLy.XZcGuJGUHDc5lGu/JNIOA.pRHO5k.B6', 'Dhanmondi', '684590055', 'Male', NULL, '2017-04-25 10:33:40', '2017-04-25 10:33:40'),
(5, 'Soumik', 'utpol', 'sharifur598@diu.edu.bd', '$2y$10$SJILJZuPH4BHsof1pMsJ1.3GC0/SZ6yJ/pUXySMYCQA6qOVr1Efb2', 'Arambag', '89989', 'Female', NULL, '2017-12-09 02:10:39', '2017-12-09 02:10:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Indexes for table `sales_gold`
--
ALTER TABLE `sales_gold`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sales_gold_email_unique` (`email`);

--
-- Indexes for table `sales_platinum`
--
ALTER TABLE `sales_platinum`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sales_platinum_email_unique` (`email`);

--
-- Indexes for table `sales_silver`
--
ALTER TABLE `sales_silver`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sales_silver_email_unique` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `sales_gold`
--
ALTER TABLE `sales_gold`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sales_platinum`
--
ALTER TABLE `sales_platinum`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sales_silver`
--
ALTER TABLE `sales_silver`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `sales_gold`
--
ALTER TABLE `sales_gold`
  ADD CONSTRAINT `sales_gold_email_foreign` FOREIGN KEY (`email`) REFERENCES `users` (`email`);

--
-- Constraints for table `sales_platinum`
--
ALTER TABLE `sales_platinum`
  ADD CONSTRAINT `sales_platinum_email_foreign` FOREIGN KEY (`email`) REFERENCES `users` (`email`);

--
-- Constraints for table `sales_silver`
--
ALTER TABLE `sales_silver`
  ADD CONSTRAINT `sales_silver_email_foreign` FOREIGN KEY (`email`) REFERENCES `users` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  jeu. 18 fév. 2021 à 16:20
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `avispolice`
--

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

DROP TABLE IF EXISTS `avis`;
CREATE TABLE IF NOT EXISTS `avis` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `titre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detail` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`id`, `titre`, `detail`, `date`, `created_at`, `updated_at`) VALUES
(6, 'couvre feux', 'azertyjhgfgklfdukjvklviliksfvjkv ik,lkjkv slvds lklkvsdklklvskjljklvkjljkvJKvKJLkjlv', '2021-02-15', '2021-02-15 19:24:49', '2021-02-15 19:24:49'),
(2, '7ari9', 'fdgjkslijsqkjjsqhxdbh', '2021-02-15', '2021-02-15 15:07:28', '2021-02-15 15:07:28'),
(5, 'test2', 'fghjkkllml', '2021-02-15', '2021-02-15 15:33:32', '2021-02-15 15:33:32'),
(7, 'حالة الطواري', 'ستنادا إلى القانون رقم 162 لسنة 1958 المعروف بـ الطوارئ،  قرر الرئيس عبدالفتاح السيسي، إعلان حالة الطوارئ في جميع أنحاء البلاد لمدة 3 أشهر اعتبارا من الساعة الواحدة صباح اليوم الثلاثاء', '2021-02-15', '2021-02-15 20:37:27', '2021-02-15 20:37:27');

-- --------------------------------------------------------

--
-- Structure de la table `coumiseareats`
--

DROP TABLE IF EXISTS `coumiseareats`;
CREATE TABLE IF NOT EXISTS `coumiseareats` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `libelle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `altitude` double NOT NULL,
  `longitude` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `coumiseareats`
--

INSERT INTO `coumiseareats` (`id`, `libelle`, `phone`, `altitude`, `longitude`, `created_at`, `updated_at`) VALUES
(18, 'شرطة تيارت', '45253590', 18.115335, -15.9465279, '2021-02-10 15:41:10', '2021-02-10 15:41:10'),
(2, 'مفوضية تفرغ زينة 1', '45252310', 1246, 354, '2021-02-10 13:33:52', '2021-02-10 13:33:52'),
(3, 'مفوضية تفرغ زينة 2', '45242952', 3521, 4885, '2021-02-10 13:34:48', '2021-02-10 13:34:48'),
(4, 'مفوضية لكصر 1', '45252166', 2345, 1452, '2021-02-10 13:35:26', '2021-02-10 13:35:26'),
(5, 'مفوضية لكصر 2', '45252738', 2452, 12545, '2021-02-10 13:36:03', '2021-02-10 13:36:03'),
(6, 'مفوضية الميناء 1', '45251297', 24663, 5785, '2021-02-10 13:36:48', '2021-02-10 13:36:48'),
(7, 'مفوضية الميناء 2', '45242524', 18.06299, -15.98191, '2021-02-10 13:37:57', '2021-02-10 15:34:47'),
(8, 'مفوضية السبخة 1', '45253821', 24562, 1475, '2021-02-10 13:38:34', '2021-02-10 13:38:34'),
(9, 'مفوضية السبخة 2', '45242982', 24562, 17885, '2021-02-10 13:39:09', '2021-02-10 13:39:09'),
(10, 'مفوضية الرياض 1', '45242935', 245, 6898, '2021-02-10 13:39:41', '2021-02-10 13:39:41'),
(11, 'مفوضية الرياض 2', '45242950', 4528, 58587, '2021-02-10 13:40:31', '2021-02-10 13:40:31'),
(12, 'مفوضية عرفات 1', '45251013', 24533, 1466, '2021-02-10 13:44:39', '2021-02-10 13:44:39'),
(13, 'مفوضية توجنين 1', '45252930', 18.06878, -15.92219, '2021-02-10 13:45:20', '2021-02-18 17:00:29'),
(14, 'مفوضية دار النعيم 1', '45242956', 1245, 32544, '2021-02-10 13:45:57', '2021-02-10 13:45:57'),
(15, 'مفوضية دار النعيم 2', '45242938', 18.08347, -15.94314, '2021-02-10 13:46:36', '2021-02-18 17:20:58'),
(16, 'مفوضية تيارت 1', '45252471', 18.1153291, -15.9466439, '2021-02-10 13:47:05', '2021-02-10 15:43:04'),
(17, 'مفوضية تيارت 2', '45242951', 18.1339692, -15.9381337, '2021-02-10 13:47:33', '2021-02-10 15:45:55'),
(19, 'الإدارة العامة للأمن الوطني', '45252159', 18.0834154, -15.9729728, '2021-02-10 15:49:46', '2021-02-10 15:49:46'),
(20, 'الإدارة العامة لأمن الطرق', '465875', 18.06566, -15.96558, '2021-02-18 16:54:23', '2021-02-18 16:54:23'),
(21, 'مفوضية عرفات 2', '45652', 18.07153, -15.9491, '2021-02-18 16:57:15', '2021-02-18 16:57:15'),
(22, 'الادارة الجهوية لأمن ولاية انواكشوط الغربية', '45255449', 18.08738, -15.97095, '2021-02-18 17:10:57', '2021-02-18 17:10:57'),
(23, 'مفوضية المحطة', '4566', 18.09065, -15.98296, '2021-02-18 17:23:34', '2021-02-18 17:23:34'),
(24, 'مركز شرطة', '465655', 18.10011, -15.96992, '2021-02-18 17:26:47', '2021-02-18 17:26:47'),
(25, 'مفوضية توجنين 4', '4566', 18.04201, -15.92151, '2021-02-18 17:30:16', '2021-02-18 17:39:00'),
(26, 'مفوضية توجنين 3', '4566', 18.07008, -15.89129, '2021-02-18 17:32:19', '2021-02-18 17:40:11'),
(27, 'مفوضية توجنين 2', '45242956', 18.07857, -15.93352, '2021-02-18 17:36:58', '2021-02-18 17:36:58'),
(28, 'المفوضية الخاصة للأمن العمومي', '45668', 18.0884, -15.96185, '2021-02-18 17:43:07', '2021-02-18 17:43:07'),
(29, 'مفوضية دار النعيم 3', '4568555', 18.13393, -15.9151, '2021-02-18 17:49:01', '2021-02-18 17:49:01'),
(30, 'مفوضية عرفات 3', '456985', 18.06834, -15.95098, '2021-02-18 17:51:54', '2021-02-18 17:51:54');

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `altitude` double NOT NULL,
  `longitude` double NOT NULL,
  `status` enum('traiter','nonTraiter') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'nonTraiter',
  `commentaire` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `image`, `description`, `phone`, `genre`, `altitude`, `longitude`, `status`, `commentaire`, `date`, `created_at`, `updated_at`) VALUES
(1, '1613383000107.jpg', 'Hggffkjhhh', '55556552', 'undefined', 18.1035719, -15.9749704, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 14:56:43', '2021-02-15 14:56:43'),
(2, '1613388812484.jpg', 'Jjhhggggguuij', '45252536', 'undefined', 18.1036327, -15.9749843, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 16:33:35', '2021-02-15 16:33:35'),
(3, '1613389826324.jpg', 'Hgjkloiuyt', '54452635', 'undefined', 18.1035756, -15.9749703, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 16:50:30', '2021-02-15 16:50:30'),
(4, '1613391547440.jpg', 'Jhhhhhhkiuo', '45236512', 'undefined', 18.103573, -15.9749656, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 17:19:10', '2021-02-15 17:19:10'),
(5, '1613392667840.jpg', 'Hjjhgfdddh', '55445555', 'undefined', 18.1035784, -15.9749684, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 17:37:57', '2021-02-15 17:37:57'),
(6, '1613396529826.jpg', 'Jhkiujhiytj', '4558', 'feu', 18.1035787, -15.9749703, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 18:42:31', '2021-02-15 18:42:31'),
(7, '1613396543292.jpg', 'Jhkiujhiytj', '45586555', 'feu', 18.1035809, -15.9749556, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 18:42:31', '2021-02-15 18:42:31'),
(8, '1613398270960.jpg', 'Ghjllkkjgfddryjklljhgffddhjkkkbvvgfddddhjiiijbgfdddtuhggggg', '45632158', 'Altercation', 18.1035652, -15.9749685, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 19:11:26', '2021-02-15 19:11:26'),
(9, '1613407963064.jpg', 'Ddjjhgfddf', '45632155', 'enlévement', 18.1035601, -15.97498, 'nonTraiter', NULL, '2021-02-15', '2021-02-15 21:52:45', '2021-02-15 21:52:45'),
(10, '1613427728853.jpg', 'hhjjkkugjjkl', '33309171', 'vol', 18.0945269, -15.9654255, 'nonTraiter', NULL, '2021-02-15', '2021-02-16 03:22:12', '2021-02-16 03:22:12'),
(11, '1613472548047.jpg', 'نت', '45632158', 'enlévement', 18.1035734, -15.9749709, 'nonTraiter', NULL, '2021-02-16', '2021-02-16 15:49:12', '2021-02-16 15:49:12'),
(12, '1613473810144.jpg', 'undefined', '55445862', 'enlévement', 18.1035702, -15.9749763, 'nonTraiter', NULL, '2021-02-16', '2021-02-16 16:10:12', '2021-02-16 16:10:12'),
(13, '1613473847013.jpg', 'undefined', '55445862', 'enlévement', 18.1035971, -15.9750967, 'nonTraiter', NULL, '2021-02-16', '2021-02-16 16:10:51', '2021-02-16 16:10:51'),
(14, '1613644892486.jpg', 'undefined', '45525124', 'enlévement', 18.103579, -15.9749676, 'nonTraiter', NULL, '2021-02-18', '2021-02-18 15:41:35', '2021-02-18 15:41:35');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(15, '2021_01_12_165515_create_messages_table', 4),
(13, '2021_01_13_090740_create_avis_table', 2),
(14, '2021_02_09_134704_create_coumiseareats_table', 3),
(17, '2021_02_18_143237_create_mobiles_table', 5);

-- --------------------------------------------------------

--
-- Structure de la table `mobiles`
--

DROP TABLE IF EXISTS `mobiles`;
CREATE TABLE IF NOT EXISTS `mobiles` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `libelle` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `altitude` double NOT NULL,
  `longitude` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `mobiles`
--

INSERT INTO `mobiles` (`id`, `libelle`, `phone`, `altitude`, `longitude`, `created_at`, `updated_at`) VALUES
(1, 'تفرغ زينة', '545585', 2125, 9555, '2021-02-18 15:04:51', '2021-02-18 15:07:01');

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nom` varchar(199) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `prenom` varchar(199) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(199) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','reception') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(199) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_login_unique` (`login`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `nom`, `prenom`, `telephone`, `login`, `role`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Abdallahi', 'Ahmed', '23343434', 'Abdallahi', 'admin', NULL, '12345678', NULL, NULL, NULL),
(2, 'Ahmed', 'Ali', '345455', 'Ahmed', 'admin', NULL, '$2y$10$Y1Ae1Pz2nH4xDgTr/eIhKOTkzS6l6bZ.d0LuBVMyvQE1fjcvRQ4Aq', NULL, '2021-01-20 14:53:19', '2021-01-20 14:53:19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
